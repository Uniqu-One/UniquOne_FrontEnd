import React, { useEffect, useRef, useState } from "react";
import ChatRoomFooterTmp from "./ChatRoomFooterTmp";
import ChatRoomItemBox from "./ChatRoomItemBox";
import ChatRoomOneDayTmp from "./ChatRoomOneDayTmp";
import SockJS from "sockjs-client";
import { CompatClient, Stomp } from "@stomp/stompjs";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { TokenState } from "../../states/recoil/TokenState";
import { UserInfoState } from "../../states/recoil/UserInfoState";
import TopTmp from "../common/tmp/TopTmp";
import { chatRoomDetailDataType } from "../../types/chat/chatRoomDetailDataType";

export type chatDataType = {
  senderId: number | string;
  message: string;
  regTime: string;
  date:string;
};

function ChatRoomTmp(props:{roomId:string}) {
  const {roomId} = props
  const [socket, setSocket] = useState()
  
  let reconnect = 0;
  
  const token = useRecoilValue(TokenState).token;
  const userId = useRecoilValue(UserInfoState).userId;

  const [roomData, setRoomData] = useState<chatRoomDetailDataType>()
  const [chatData, setChatData] = useState<chatDataType[]>([]);
  const [enter, setEnter] = useState(false)
  const [ws, setWs] = useState<CompatClient>();
  const [isConnect, setIsConnect] = useState(false)
  const scrollRef = useRef<null | HTMLDivElement>(null);

  const connect =  () => {
    if (ws !== undefined && isConnect===false) {
      
      ws.connect(
        {},
        () => {
          
          ws.subscribe(
            `/sub/chat/room/${roomId}`,
            (recMessage: { body: string }) => {
              console.log('구독')
              let recv = JSON.parse(recMessage.body);
              const { senderId, message, date, regTime } = recv;
              setChatData((prev) => [
                ...prev,
                { senderId, message, date, regTime },
              ]);
            }
          );
            console.log(ws)
          ws.send(
            "/sub/chat/message",
            {
              Authorization: token,
            },
            JSON.stringify({
              type: "ENTER",
              chatRoomId: roomId,
              senderId: userId,
            })
          );

          setIsConnect(true)
        },
        // (err: any) => {
        //   if (reconnect++ <= 5) {
        //     setTimeout(() => {
        //       socket = new SockJS(
        //         process.env.NEXT_PUBLIC_URL_AWS + "/chat/ws-stomp"
        //       );
        //       setWs(Stomp.over(socket));
        //       connect();
        //     }, 10 * 1000);
        //   }
        // }
      );
    }
  };


  const handleStopmOver = () => {
    
    setWs(Stomp.over(() => SockJS(process.env.NEXT_PUBLIC_URL_AWS + "/chat/ws-stomp")));
  }

  useEffect(() => {
    handleStopmOver()
  },[])

  useEffect(() => {
    
    if(ws!==undefined && isConnect === false){ 
      
      connect();
      axios
            .get(
              `${process.env.NEXT_PUBLIC_URL_AWS}/chat/room/all/${roomId}`,
              {
                headers: {
                  Authorization: token,
                },
              }
            )
            .then((res) => {
              setRoomData(res.data.data)
              setChatData(res.data.data.chatResponseDtos);
              return ;
            })
            .catch((err) => {
              console.error(err)
              return [];
            });
  
      // return () => {
      //   ws?.disconnect();
      // }; 

    }


  }, [ws]);



  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
    setEnter(true)
    return () => {
      if (chatData[0] === undefined && enter === true) {
        axios
          .post(`${process.env.NEXT_PUBLIC_URL_AWS}/chat/room/${roomId}`, {
            headers: {
              Authorization: token,
            },
          })
          .then((res) => console.log(res.status))
          .catch((err) => console.log(err));
      }
    };
  }, [chatData]);

  return (
    <>
      <TopTmp text={roomData?.receiverName} />

      {roomData ? 
      <>
      <ChatRoomItemBox roomData={roomData}/>
  
      <ChatRoomOneDayTmp chatData={chatData} roomData={roomData}/>
      <div ref={scrollRef} />
  
      <ChatRoomFooterTmp 
        ws={ws}
        roomId={
          typeof roomId === "string" ? roomId : ""
        }
        />
        </>
      : 
      <>
      </>
    }
    </>
  );
}

export default ChatRoomTmp;
