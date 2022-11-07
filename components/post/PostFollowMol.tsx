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
    console.log(followStatus)
    console.log(cornId)

    if (!followStatus ) {
      console.log('팔로우를 안한 상태')
      if(await FollowUtils.registerFollow(token,cornId)){
        
        ToastUtils.toast("팔로잉에 성공하였습니다.");
        setFollowStatus(!followStatus);
      }
    } else {
      console.log('팔로우를 한 상태')
      if(await FollowUtils.cancelFollow(token,cornId)){
      ToastUtils.toast("팔로잉을 취소하였습니다.");
      setFollowStatus(!followStatus);
      }
    }


    
  };
  console.log(isFollow)

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
