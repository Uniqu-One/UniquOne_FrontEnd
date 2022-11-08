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
  date: string;
};

function ChatRoomTmp(props: { roomId: string }) {
  const { roomId } = props;
  const [socket, setSocket] = useState();

  const token = useRecoilValue(TokenState).token;
  const userId = useRecoilValue(UserInfoState).userId;

  const [roomData, setRoomData] = useState<chatRoomDetailDataType>();
  const [chatData, setChatData] = useState<chatDataType[]>([]);
  const [enter, setEnter] = useState(false);
  const [ws, setWs] = useState<CompatClient>();
  const [isConnect, setIsConnect] = useState(false);
  const scrollRef = useRef<null | HTMLDivElement>(null);

  const handleRemoveChatRoom = () => {
    axios
      .post(`${process.env.NEXT_PUBLIC_URL_AWS}/chat/room/${roomId}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.error("채팅방 삭제 완료");
      })
      .catch((err) => console.log(err));
  };

  const connect = () => {
    if (ws !== undefined && isConnect === false) {
      ws.connect({}, (frame: any) => {
        ws.subscribe(
          `/sub/chat/room/${roomId}`,
          (recMessage: { body: string }) => {
            
            let recv = JSON.parse(recMessage.body);

            const { senderId, message, date, regTime } = recv;

            setChatData((prev) => {
              return [...prev, { senderId, message, date, regTime }];
            });
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

        setIsConnect(true);
      });
    }
  };

  const handleStopmOver = () => {
    setWs(
      Stomp.over(
        () => new SockJS(process.env.NEXT_PUBLIC_URL_AWS + "/chat/ws-stomp")
      )
    );
  };

  useEffect(() => {
    handleStopmOver();
  }, []);

  useEffect(() => {
    if (ws !== undefined && isConnect === false) {
      connect();
      axios
        .get(`${process.env.NEXT_PUBLIC_URL_AWS}/chat/room/all/${roomId}`, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          let chatDatas = res.data.data.chatResponseDtos;
          if (chatDatas === null) {
            chatDatas = [];
          }
          setRoomData(res.data.data);
          setChatData(chatDatas);
          return;
        })
        .catch((err) => {
          console.error(err);
          return [];
        });
      return () => {
        console.error("채팅 끊어짐");
        ws?.disconnect();
      };
    }
  }, [ws]);

  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behavior: "smooth" });

    return () => {
      if(enter === true && chatData[0] === undefined){
        handleRemoveChatRoom()
      }
    }
  }, [chatData]);


  return (
    <>
      <TopTmp text={roomData?.receiverName} />

      {roomData ? (
        <>
          <ChatRoomItemBox roomData={roomData} />

          <ChatRoomOneDayTmp chatData={chatData} roomData={roomData} />
          <div ref={scrollRef} />

          <ChatRoomFooterTmp
            setEnter={setEnter}
            ws={ws}
            roomId={typeof roomId === "string" ? roomId : ""}
          />
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default ChatRoomTmp;