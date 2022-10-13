import axios from "axios";
import React, { useEffect, useState } from "react";
import ChatBoxMol from "./ChatBoxMol";

function ChatTmp() {
  const [chatRoomList, setChatRoomList] = useState<{ chatRoomId: string }[]>(
    []
  );

  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_URL + "/chat/1")
      .then((res) => {
        console.log(res);
        return setChatRoomList([...res.data]);
      })
      .catch((err) => console.error(err));
  }, []);

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
