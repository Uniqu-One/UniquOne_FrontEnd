import React, { useEffect, useState } from "react";
import ChatRoomFooterTmp from "./ChatRoomFooterTmp";
import ChatRoomItemBox from "./ChatRoomItemBox";
import ChatRoomOneDayTmp from "./ChatRoomOneDayTmp";
import SockJS from "sockjs-client";
import StompJs, { Stomp } from "@stomp/stompjs";
import axios from "axios";
import { useRouter } from "next/router";

function ChatRoomTmp() {
  const route = useRouter();

  const socket = new SockJS("http://10.10.10.143:8080/ws-stomp");
  const ws = Stomp.over(socket);

  const connect = () => {
    ws.connect({}, (frame: any) => {
      ws.subscribe(`/sub/chat/room/${route.query.roomId}`, (messgae) => {
        let recv = JSON.parse(messgae.body);
        console.log(recv)
      });
    });
  };

  connect();

  const [chatData, setChatData] = useState([]);

  useEffect(() => {
    {
      route.query.roomId &&
        axios
          .get(`http://10.10.10.143:8080/chat/room/all/${route.query.roomId}/1`)
          .then((res) => {
            // console.log(res)
            return setChatData(res.data.chatResponseDtos);
          })
          .catch((err) => console.error(err));
    }
  }, [route.query.roomId]);

  const handleSendMessage = () => {
    ws.send(
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
      <ChatRoomFooterTmp handleSendMessage={handleSendMessage}/>
    </>
  );
}

export default ChatRoomTmp;
