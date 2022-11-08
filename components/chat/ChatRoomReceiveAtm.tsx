import styled from "@emotion/styled";
import React from "react";
import { color } from "../../styles/theme";

const ChatRoomReceiveAtmStyle = styled.div`
  display: flex;

  margin: 12px 18px;

  img{
    border-radius: 100%;
  }

  .chat {
    display: flex;
    position: relative;

  }

  .bubble {
    margin-left: 12px;
    max-width: calc(100vw - 176px);
    padding: 12px;
    background-color: ${color.p_gray_lt};
    color: ${color.p_gray_dk};
    border-radius: 18px;
  }

  .time{
    p{
      position: absolute;
      font-size: 0.875rem;
      color: ${color.p_gray_md};
      right: -68px;
      bottom: 3px;
    }
  }

`;

function ChatRoomReceiveAtm(props:{text:string, regTime:string, receiverImg:string}) {
  return (
    <>
      <ChatRoomReceiveAtmStyle>
        <div>
          <img  
            src={props.receiverImg ? props.receiverImg :"/assets/images/dummyUserImg.jpg"}
            alt="더미 유저 이미지"
            width={30}
            height={30}
          />
        </div>
        <div className="chat">
          <div className="bubble"><p>{props.text}</p></div>
          <div className="time"><p>{props.regTime}</p></div>
        </div>
      </ChatRoomReceiveAtmStyle>
    </>
  );
}

export default ChatRoomReceiveAtm;
