import styled from "@emotion/styled";
import React from "react";
import { color } from "../../styles/theme";

const ChatRoomSendAtmStyle = styled.div`
  display: flex;
  justify-content: right;
  margin: 12px 18px;

  .chat {
    display: flex;
    position: relative;
  }

  .bubble {
    margin-left: 12px;
    max-width: calc(100vw - 130px);
    padding: 12px;
    background-color: ${color.p_pruple};
    color: white;
    border-radius: 18px;
  }

  .time{
    p{
      position: absolute;
      
      font-size: 0.875rem;
      color: ${color.p_gray_md};
      margin-left: -48px;
      bottom: 3px;
      
    }
  }

`;

function ChatRoomSendAtm(props:{text:string}) {
  return (
    <>
      <ChatRoomSendAtmStyle>
        <div className="chat">
        <div className="time"><p>오후 9:56</p></div>
          <div className="bubble"><p>{props.text}</p></div>
        </div>
      </ChatRoomSendAtmStyle>
    </>
  );
}

export default ChatRoomSendAtm;
