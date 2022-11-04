import styled from "@emotion/styled";
import React from "react";
import { useRecoilValue } from "recoil";
import { UserInfoState } from "../../states/recoil/UserInfoState";
import { color } from "../../styles/theme";
import { chatRoomDetailDataType } from "../../types/chat/chatRoomDetailDataType";
import ChatRoomReceiveAtm from "./ChatRoomReceiveAtm";
import ChatRoomSendAtm from "./ChatRoomSendAtm";
import { chatDataType } from "./ChatRoomTmp";

const ChatRoomOneDayTmpStyle = styled.div`
  padding-top: 126px;
  padding-bottom: 70px;
  h2 {
    font-size: 0.875rem;
    color: ${color.p_gray_md};
    text-align: center;
  }
`;

function ChatRoomOneDayTmp(props: {
  chatData: chatDataType[];
  roomData:chatRoomDetailDataType
}) {
  const { chatData } = props;
  const {receiverImg} = props.roomData
  const userId = useRecoilValue(UserInfoState).userId;

  return (
    <>
      <ChatRoomOneDayTmpStyle>
        <h2>22년 9월 17일</h2>
        {chatData !== null &&
          chatData.map((chat, idx) => {
            if (chat.senderId === userId) {
              return <ChatRoomSendAtm key={idx} text={chat.message} regTime={chat.regTime} />;
            } else {
              {
                return <ChatRoomReceiveAtm key={idx} text={chat.message} regTime={chat.regTime} receiverImg={receiverImg}/>;
              }
            }
          })}




      </ChatRoomOneDayTmpStyle>
    </>
  );
}

export default ChatRoomOneDayTmp;
