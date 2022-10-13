import styled from "@emotion/styled";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { chatListDataType } from "../../types/chat/chatListDataType";
import ChatBoxMol from "./ChatBoxMol";

const ChatBoxMolStyle = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
`;

function ChatTmp() {
  const [chatRoomDatas, setChatRoomDatas] = useState<chatListDataType[]>(
    []
  );

  //TODO - useQuery로 변경 || is Loading / Error / output 형태로 진행

  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_URL + "/chat/1")
      .then((res) => {
        return setChatRoomDatas([...res.data]);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <ChatBoxMolStyle>
        {chatRoomDatas.map((chatData) => {
          return (
            <ChatBoxMol key={chatData.chatRoomId} chatData={chatData}/>
          );
        })}
      </ChatBoxMolStyle>
    </>
  );
}

export default ChatTmp;
