import React, { useEffect, useState } from "react";
import ChatRoomFooterTmp from "./ChatRoomFooterTmp";
import ChatRoomItemBox from "./ChatRoomItemBox";
import ChatRoomOneDayTmp from "./ChatRoomOneDayTmp";
import SockJS from "sockjs-client";
import StompJs, { Stomp } from "@stomp/stompjs";
import axios from "axios";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

const ChatRoomTmpStyle = styled.div`
  padding-top: 48px;
`;

function ChatRoomTmp() {
  const route = useRouter();

  const socket = new SockJS("http://10.10.10.143:8080/ws-stomp");
  const ws = Stomp.over(socket);
  const [chatData, setChatData] = useState([]);

  const connect = () => {
    ws.connect({}, (frame: any) => {
      ws.subscribe(`/sub/chat/room/${route.query.roomId}`, (messgae) => {
        let recv = JSON.parse(messgae.body);
        console.log(recv);
      });
    });
  };

  connect();

  useEffect(() => {
    {
      route.query.roomId &&
        axios
          .get(`http://10.10.10.143:8080/chat/room/all/${route.query.roomId}/1`)
          .then((res) => {
            return setChatData(res.data.chatResponseDtos);
          })
          .catch((err) => console.error(err));
    }
  }, [route.query.roomId]);

  const handleSendMessage = async () => {
    await ws.send(
      "/pub/chat/message",
      {
        type: "TALK",
        chatRoomId: route.query.roomId,
        senderId: 1,
        message: "1",
      },
      JSON.stringify({
        type: "TALK",
        chatRoomId: route.query.roomId,
        senderId: 1,
        message: "1",
      })
    );
  };

  return (
    <>
      
        <ChatRoomItemBox />
        
        <ChatRoomOneDayTmp chatData={chatData} setChatData={setChatData} />
        <ChatRoomFooterTmp
          handleSendMessage={handleSendMessage}
          ws={ws}
          roomId={
            typeof route.query.roomId === "string" ? route.query.roomId : ""
          }
        />
    </>
  );
}

export default ChatRoomTmp;