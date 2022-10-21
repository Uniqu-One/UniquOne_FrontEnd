import styled from "@emotion/styled";
import React from "react";
import { color } from "../../styles/theme";
import QuestionMarkAtm from "../common/atm/QuestionMarkAtm";

const ChatRoomNoneMolStyle = styled.div`
  margin-top: 40vh;
  text-align: center;

  svg {
    fill: ${color.p_gray_dk};
    width: 42px;
    height: 42px;
  }
  p {
    margin-top: 9px;
    font-size: 0.875rem;
    color: ${color.p_gray_dk};
  }
`;

function ChatRoomNoneMol() {
  return (
    <>
      <ChatRoomNoneMolStyle>
        <QuestionMarkAtm />
        <p>채팅이 시작된 후에 내용을 확인할 수 있어요!</p>
      </ChatRoomNoneMolStyle>
    </>
  );
}

export default ChatRoomNoneMol;
