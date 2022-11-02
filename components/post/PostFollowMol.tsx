import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { FollowUtils } from "../../lib/utils/FollowUtils";
import { ToastUtils } from "../../lib/utils/ToastUtils";
import { TokenState } from "../../states/recoil/TokenState";
import FollowBtnMol from "../common/mol/FollowBtnMol";

function PostFollowMol(props:{postId:string|number, isFollow:boolean|null}) {
  const token = useRecoilValue(TokenState).token
  const postId = props.postId
  const isFollow = props.isFollow
  const [followStatus, setFollowStatus] = useState(true);

  const handleFollowStatus = async () => {
    if (followStatus) {
      if(await FollowUtils.registerFollow(token,1)){
        ToastUtils.success("팔로잉에 성공하였습니다.");
        setFollowStatus(!followStatus);
      }
    } else {
      if(await FollowUtils.cancelFollow(token,1)){
      ToastUtils.error("팔로잉을 취소하였습니다.");
      setFollowStatus(!followStatus);
      }
    }

    
  };
  return (
    <>
      <FollowBtnMol
        followStatus={isFollow}
        handleFollowStatus={handleFollowStatus}
      />
    </>
  );
}

export default PostFollowMol;
