import { useRouter } from "next/router";
import React from "react";
import { useRecoilValue } from "recoil";
import { ChatUtils } from "../../../lib/utils/ChatUtils";
import { TokenState } from "../../../states/recoil/TokenState";

function PostSingleFooterChatMol(props:{postId:string|number}) {

  const token = useRecoilValue(TokenState).token
  const {postId} = props
  const router = useRouter()

  const handlePresentChat = async () => {
    const chatRoomId = await ChatUtils.presentChat(token,postId)
    router.push(`/chat/${chatRoomId}`)
  }

  return (
    <div onClick={() => handlePresentChat()}>
      <p className="chat">채팅하기</p>
    </div>
  );
}

export default PostSingleFooterChatMol;
