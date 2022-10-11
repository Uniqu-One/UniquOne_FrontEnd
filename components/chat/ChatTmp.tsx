import axios from "axios";
import React, { useEffect, useState } from "react";
import ChatBoxMol from "./ChatBoxMol";

function ChatTmp() {
  const [chatRoomList, setChatRoomList] = useState<{}[]>([]);

  useEffect(() => {
    axios
      .get("http://10.10.10.143:8080/chat/1")
      .then((res) => setChatRoomList([...res.data]))
      .catch((err) => console.error(err));
  }, []);

  console.log(chatRoomList);

  return (
    <>
      {chatRoomList.map((room) => {
        return (
          <ChatBoxMol chatRoomId={room.chatRoomId} key={room.chatRoomId} />
        );
      })}
    </>
  );
}

export default ChatTmp;
