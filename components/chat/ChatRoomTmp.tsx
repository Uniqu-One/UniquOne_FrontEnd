import React, { useEffect, useRef, useState } from "react";
import ChatRoomFooterTmp from "./ChatRoomFooterTmp";
import ChatRoomItemBox from "./ChatRoomItemBox";
import ChatRoomOneDayTmp from "./ChatRoomOneDayTmp";
import SockJS from "sockjs-client";
import StompJs, { CompatClient, Stomp } from "@stomp/stompjs";
import axios from "axios";
import { useRouter } from "next/router";

export type chatDataType = {
  senderId: number;
  message: string;
  regDate: string;
};

function ChatRoomTmp() {
  const socket = new SockJS(process.env.NEXT_PUBLIC_URL + "/chat/ws-stomp");

  const route = useRouter();

  const [chatData, setChatData] = useState<chatDataType[]>([]);
  const [roomId, setRoomId] = useState("");
  const [ws, setWs] = useState<CompatClient>();

  const scrollRef = useRef<null | HTMLDivElement>(null);

  const connect = () => {
    if (ws) {
      ws.connect({}, () => {
        ws.subscribe(
          `/sub/chat/room/${route.query.roomId}`,
          (recMessage: { body: string }) => {
            let recv = JSON.parse(recMessage.body);
            const { message, senderId, regDate } = recv;
            setChatData((prev) => [...prev, { message, senderId, regDate }]);
          }
        );
      });
    }
  };

  useEffect(() => {
    {
      route.query.roomId &&
        axios
          .get(
            `${process.env.NEXT_PUBLIC_URL}/chat/room/all/${route.query.roomId}/1`
          )
          .then((res) => {
            return setChatData(res.data.chatResponseDtos);
          })
          .catch((err) => console.error(err));
    }
  }, [roomId]);

  useEffect(() => {
    if (roomId !== "") {
      connect();
      return () => {
        ws?.disconnect();
      };
    }
  }, [roomId]);

  useEffect(() => {
    const query = route.query;
    if (typeof query.roomId === "string" && query.roomId !== "") {
      setRoomId(query.roomId);
      setWs(Stomp.over(() => socket));
    }
  }, [route.query.roomId]);

  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatData]);

  return (
    <>
      <ChatRoomItemBox />

      <ChatRoomOneDayTmp chatData={chatData} setChatData={setChatData} />
      <div ref={scrollRef} />

      <ChatRoomFooterTmp
        setChatData={setChatData}
        ws={ws}
        roomId={
          typeof route.query.roomId === "string" ? route.query.roomId : ""
        }
      />
    </>
  );
}

export default ChatRoomTmp;
