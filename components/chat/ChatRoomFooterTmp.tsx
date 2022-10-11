import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import useEvaIcon from "../../lib/hooks/useEvaIcon";
import { color } from "../../styles/theme";

const ChatRoomFooterTmpStyle = styled.div<{sendStatus:boolean}>`
  height: 66px;
  width: 100vw;
  position: fixed;
  bottom: 0%;
  right: 0;
  display: flex;
  justify-content: space-between;
  border-top: 0.5px solid ${color.p_gray_lt};

  div{
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

  svg{
    margin-right: 18px;
    fill: ${(props) => props.sendStatus ? color.p_pruple :color.p_gray_md}   ;
  }
`;

function ChatRoomFooterTmp(props:{handleSendMessage:Function}) {
  useEvaIcon();

  const [tempChat, setTempChat] = useState("")
  const [sendStatus, setSendStatus] = useState(false)

  useEffect(() => {

    if(tempChat!==""){
      setSendStatus(true)
    } else{
      setSendStatus(false)
    }

  },[tempChat])

  return (
    <>
      <ChatRoomFooterTmpStyle sendStatus={sendStatus}>
        <div>
          <input type="text" placeholder="메세지 보내기" onChange={(e)=>setTempChat(e.target.value)}/>
        </div>
        <div onClick={() => props.handleSendMessage()}>
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
