import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { FollowUtils } from "../../lib/utils/FollowUtils";
import { ToastUtils } from "../common/tmp/ToastTmp";import { TokenState } from "../../states/recoil/TokenState";
import FollowBtnMol from "../common/mol/FollowBtnMol";

function PostFollowMol(props:{postId:string|number, isFollow:boolean|null, cornId:number|string}) {
  const token = useRecoilValue(TokenState).token
  const cornId = props.cornId
  const isFollow = props.isFollow
  const [followStatus, setFollowStatus] = useState(false);

  const handleFollowStatus = async () => {

    if (!followStatus ) {
      if(await FollowUtils.registerFollow(token,cornId)){
        
        ToastUtils.toast("팔로잉에 성공하였습니다.");
        setFollowStatus(!followStatus);
      }
    } else {
      if(await FollowUtils.cancelFollow(token,cornId)){
      ToastUtils.toast("팔로잉을 취소하였습니다.");
      setFollowStatus(!followStatus);
      }
    }


    
  };

  useEffect(() => {
    // @ts-ignore
    setFollowStatus(isFollow)
  },[])

  return (


    
    <>
      <FollowBtnMol
        followStatus={followStatus}
        handleFollowStatus={handleFollowStatus}
      />
    </>
  );
}

export default PostFollowMol;
