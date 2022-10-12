import React, { useEffect, useState } from "react";
import ChatRoomFooterTmp from "./ChatRoomFooterTmp";
import ChatRoomItemBox from "./ChatRoomItemBox";
import ChatRoomOneDayTmp from "./ChatRoomOneDayTmp";
import SockJS from "sockjs-client";
import StompJs, { Stomp } from "@stomp/stompjs";
import axios from "axios";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

export type chatDataType = {
  senderId: number;
  message: string;
  regDate: string;
};

function ChatRoomTmp() {
  console.log(process.env.NEXT_PUBLIC_URL)
  const socket = new SockJS("http://3.38.92.156:8000/ws-stomp");
  const ws = Stomp.over(() => socket);
  ws.debug = () => {};

  const route = useRouter();
  const [chatData, setChatData] = useState<chatDataType[]>([]);

  const connect = () => {
    ws.connect({}, () => {
      ws.subscribe(`/sub/chat/room/${route.query.roomId}`, (message) => {
        let recv = JSON.parse(message.body);
        console.log(recv, "!!");
      });
    });
  };
  connect();

  useEffect(() => {
    {
      route.query.roomId &&
        axios
          .get(`http://3.38.92.156:8000/chat/room/all/${route.query.roomId}/1`)
          .then((res) => {
            return setChatData(res.data.chatResponseDtos);
          })
          .catch((err) => console.error(err));
    }
  }, [route.query.roomId]);

  return (
    <>
      <ChatRoomItemBox />

      <ChatRoomOneDayTmp chatData={chatData} setChatData={setChatData} />
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
