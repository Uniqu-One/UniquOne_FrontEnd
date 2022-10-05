import styled from "@emotion/styled";
import Image from "next/image";
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
      right: -56px;
      bottom: 3px;
    }
  }

`;

function ChatRoomReceiveAtm() {
  return (
    <>
      <ChatRoomReceiveAtmStyle>
        <div>
          <Image
            src="/assets/images/dummyUserImg.jpg"
            alt="더미 유저 이미지"
            width={30}
            height={30}
          />
        </div>
        <div className="chat">
          <div className="bubble"><p>채팅 버블채팅</p></div>
          <div className="time"><p>오후 9:56</p></div>
        </div>
      </ChatRoomReceiveAtmStyle>
    </>
  );
}

export default ChatRoomReceiveAtm;
