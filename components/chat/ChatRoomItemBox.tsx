import styled from "@emotion/styled";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { color } from "../../styles/theme";
import { chatRoomDetailDataType } from "../../types/chat/chatRoomDetailDataType";
import ChatRoomButtonMol from "./ChatRoomButtonMol";

const ChatRoomItemBoxStyle = styled.div`
  padding-top: 48px;

  position: fixed;
  width: 100vw;
  background-color: white;
  z-index: 4;
  height: 66px;

  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid ${color.p_gray_lt};
  font-size: 0.875rem;

  img {
    border-radius: 9px;
  }
  .left {
    margin: auto 0;
    margin-left: 18px;
    display: flex;

    .text {
      margin: auto 0;
      margin-left: 6px;
      color: ${color.p_gray_dk};
      font-weight: 550;

      display: flex;
      flex-direction: column;
      h4 {
        margin: 1.5px 0px;
      }
      span {
        color: ${color.p_gray_md};
        font-weight: 450;
      }
    }
  }
  .button {
    margin-right: 18px;
    z-index: 5;
    margin-top: 18px;
  }
`;

function ChatRoomItemBox(props: { roomData: chatRoomDetailDataType }) {
  const router = useRouter();

  const {
    postImg,
    postPrice,
    postType,
    postId,
    receiverId,
    postTitle,
    chatRoomType,
  } = props.roomData;

  return (
    <>
      <ChatRoomItemBoxStyle>
        <div className="left" onClick={() => router.push(`/post/${postId}`)}>
          <div>
            <Image
              loading="lazy"
              src={postImg && postImg}
              alt="dummy image"
              width={42}
              height={42}
            />
          </div>
          <div className="text">
            <h4>{postTitle}</h4>
            <h4>{postPrice.toLocaleString()}원</h4>
          </div>
        </div>

        <div className="button">
          <ChatRoomButtonMol
            postType={postType}
            postId={postId}
            receiverId={receiverId}
            chatRoomType={chatRoomType}
          />
        </div>
      </ChatRoomItemBoxStyle>
    </>
  );
}

export default ChatRoomItemBox;
