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

function ChatRoomOneDayTmp() {
  return (
    <>
      <ChatRoomOneDayTmpStyle>
        <h2>22년 9월 17일</h2>
        <ChatRoomReceiveAtm />
        <ChatRoomReceiveAtm />
        <ChatRoomSendAtm />
        <ChatRoomReceiveAtm />
        <ChatRoomSendAtm />
      </ChatRoomOneDayTmpStyle>
    </>
  );
}

export default ChatRoomOneDayTmp;
