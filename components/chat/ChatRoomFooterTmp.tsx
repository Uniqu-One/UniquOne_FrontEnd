import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import useEvaIcon from "../../lib/hooks/useEvaIcon";
import { color } from "../../styles/theme";
import { chatDataType } from "./ChatRoomTmp";

const ChatRoomFooterTmpStyle = styled.div<{ sendStatus: boolean }>`
  background-color: white;
  height: 66px;
  width: 100vw;
  position: fixed;
  bottom: 0%;
  right: 0;
  display: flex;
  justify-content: space-between;
  border-top: 0.5px solid ${color.p_gray_lt};

  div {
    margin: auto 0;
  }

  input {
    margin-left: 18px;
    width: calc(100vw - 95px);
    height: 36px;
    border: 0.5px solid ${color.p_gray_md};
    border-radius: 12px;
    padding-left: 12px;
  }

  svg {
    margin-right: 18px;
    fill: ${(props) => (props.sendStatus ? color.p_pruple : color.p_gray_md)};
  }
`;

function ChatRoomFooterTmp(props: {
  ws: any;
  roomId: string;
  setChatData: Function;
}) {
  useEvaIcon();

  const [tempChat, setTempChat] = useState("");
  const [sendStatus, setSendStatus] = useState(false);
  const { ws, roomId, setChatData } = props;

  const handleSendMessage = () => {
    if (tempChat !== "" && ws !== undefined) {
      ws.send(
        "/pub/chat/message",
        {
          type: "TALK",
          chatRoomId: roomId,
          senderId: 1,
          message: tempChat,
        },
        JSON.stringify({
          type: "TALK",
          chatRoomId: roomId,
          senderId: 1,
          message: tempChat,
        })
      );
    }

    // setChatData((prev: chatDataType[]) => {
    //   return [...prev, { senderId: 1, message: tempChat, regDate: new Date() }];
    // });

    setTempChat("");
  };

  useEffect(() => {
    if (tempChat !== "") {
      setSendStatus(true);
    } else {
      setSendStatus(false);
    }
  }, [tempChat]);

  return (
    <>
      <ChatRoomFooterTmpStyle sendStatus={sendStatus}>
        <div>
          <input
            type="text"
            placeholder="메세지 보내기"
            onChange={(e) => setTempChat(e.target.value)}
            value={tempChat}
          />
        </div>
        <div onClick={() => handleSendMessage()}>
          <i
            data-eva="paper-plane-outline"
            data-eva-height="30px"
            data-eva-width="30px"
          ></i>
        </div>
      </ChatRoomFooterTmpStyle>
    </>
  );
}

export default ChatRoomFooterTmp;
