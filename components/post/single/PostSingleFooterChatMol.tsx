import { useRouter } from "next/router";
import React from "react";
import { useRecoilValue } from "recoil";
import { ChatUtils } from "../../../lib/utils/ChatUtils";
import { TokenState } from "../../../states/recoil/TokenState";
import { UserInfoState } from "../../../states/recoil/UserInfoState";
import { ToastUtils } from "../../common/tmp/ToastTmp";

function PostSingleFooterChatMol(props:{postId:string|number, postCornId:string|number}) {

  const token = useRecoilValue(TokenState).token
  const userCornId = useRecoilValue(UserInfoState).cornId
  const {postId,postCornId} = props
  const router = useRouter()

  console.log(props)

  const handlePresentChat = async () => {
    
    if(userCornId === postCornId){
      ToastUtils.toast('나와 채팅은 불가능해요 😂')
      return;
    }

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
