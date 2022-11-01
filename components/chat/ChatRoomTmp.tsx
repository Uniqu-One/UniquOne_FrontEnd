import React, { useEffect, useRef, useState } from "react";
import ChatRoomFooterTmp from "./ChatRoomFooterTmp";
import ChatRoomItemBox from "./ChatRoomItemBox";
import ChatRoomOneDayTmp from "./ChatRoomOneDayTmp";
import SockJS from "sockjs-client";
import { CompatClient, Stomp } from "@stomp/stompjs";
import axios from "axios";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { TokenState } from "../../states/recoil/TokenState";
import { UserInfoState } from "../../states/recoil/UserInfoState";

export type chatDataType = {
  senderId: number | string;
  message: string;
  regTime: string;
  date:string;
};

function ChatRoomTmp(props:{roomId:string}) {
  const {roomId} = props
  // console.log(roomId)
  let socket = new SockJS(process.env.NEXT_PUBLIC_URL_AWS + "/chat/ws-stomp");
  let reconnect = 0;
  const router = useRouter();
  const token = useRecoilValue(TokenState).token;
  const userId = useRecoilValue(UserInfoState).userId;

  const [chatData, setChatData] = useState<chatDataType[]>([]);
  const [ws, setWs] = useState<CompatClient>();
  const scrollRef = useRef<null | HTMLDivElement>(null);

  const connect =  () => {
    if (ws !== undefined) {
      ws.connect(
        {},
        () => {
          ws.subscribe(
            `/sub/chat/room/${roomId}`,
            (recMessage: { body: string }) => {
              let recv = JSON.parse(recMessage.body);
              const { senderId, message, date, regTime } = recv;
              setChatData((prev) => [
                ...prev,
                { senderId, message, date, regTime },
              ]);
            }
          );

          ws.send(
            "/pub/chat/message",
            {
              Authorization: token,
            },
            JSON.stringify({
              type: "ENTER",
              chatRoomId: roomId,
              senderId: userId,
            })
          );
        },
        (err: any) => {
          if (reconnect++ <= 5) {
            setTimeout(() => {
              socket = new SockJS(
                process.env.NEXT_PUBLIC_URL_AWS + "/chat/ws-stomp"
              );
              setWs(Stomp.over(socket));
              connect();
            }, 10 * 1000);
          }
        }
      );
    }
  };


  const handleStopmOver = () => {
    setWs(Stomp.over(() => socket));
  }

  useEffect(() => {
    handleStopmOver()
  },[])

  useEffect(() => {
    
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
              return setChatData(res.data.data.chatResponseDtos);
            })
            .catch((err) => console.error(err));
  // test
      return () => {
        ws?.disconnect();
      };

  }, [ws]);



  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behavior: "smooth" });

    return () => {
      if (chatData === undefined) {
        axios
          .post(`${process.env.NEXT_PUBLIC_URL_AWS}/chat/room/${roomId}`, {
            headers: {
              Authorization: token,
            },
          })
          // .then((res) => console.log(res.status))
          // .catch((err) => console.log(err));
      }
    };
  }, [chatData]);

  return (
    <>
      <ChatRoomItemBox />

      <ChatRoomOneDayTmp chatData={chatData} />
      <div ref={scrollRef} />

      <ChatRoomFooterTmp 
        ws={ws}
        roomId={
          typeof roomId === "string" ? roomId : ""
        }
      />
    </>
  );
}

export default ChatRoomTmp;
