import styled from "@emotion/styled";
import React from "react";
import { color } from "../../styles/theme";
import ChatRoomReceiveAtm from "./ChatRoomReceiveAtm";
import ChatRoomSendAtm from "./ChatRoomSendAtm";

const ChatRoomOneDayTmpStyle = styled.div`
  h2 {
    font-size: 0.875rem;
    color: ${color.p_gray_md};
    text-align: center;
  }
`;

function ChatRoomOneDayTmp(props: {
  chatData: { senderId: number; message: string; regData: null }[];
  setChatData: Function;
}) {
  const { chatData, setChatData } = props;

  return (
    <>
      <ChatRoomOneDayTmpStyle>
        <h2>22년 9월 17일</h2>

        {chatData.map((chat, idx) => {
          if (chat.senderId === 1) {
            return <ChatRoomSendAtm key={idx} text={chat.message} />;
          } else {
            console.log(chat);
            {
              return <ChatRoomReceiveAtm key={idx} text={chat.message} />;
            }
          }
        })}
      </ChatRoomOneDayTmpStyle>
    </>
  );
}

export default ChatRoomOneDayTmp;
