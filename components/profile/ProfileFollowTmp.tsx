import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import MyReviewTapMol from "../review/MyReviewTapMol";
import ProfileFollowCardBoxMol from "./ProfileFollowCardBoxMol";
import { motion } from "framer-motion";
import { FollowUtils } from "../../lib/utils/FollowUtils";
import { useRecoilValue } from "recoil";
import { TokenState } from "../../states/recoil/TokenState";

//TODO - tapModal용 공통 컴포넌트 생성

function ProfileFollowTmp(props:{type:string, cornId?:number|string}) {
  const token = useRecoilValue(TokenState).token
  const route = useRouter();
  const type = props.type;
  const cornId = props.cornId;

  const tabs = ["팔로워", "팔로잉"];
  const [tempTab, setTempTab] = useState(0);
  const [tempUserData, setTempUserData] = useState([])

  const handleUpdateFollow = async() => {
    if(tempTab === 0){
      if(type === "my"){
        setTempUserData(await FollowUtils.getMyFollowList(token))
      }
      if(type ==="other"){
        //@ts-ignore
        setTempUserData(await FollowUtils.getOthersFollowList(token,cornId))
      }
    } else {
      if(type==="my"){
        setTempUserData(await FollowUtils.getMyFollowingList(token))
      }
      if(type === "other"){
        //@ts-ignore
        setTempUserData(await FollowUtils.getOthersFollowingList(token,cornId))
      }
    }
  }

  useEffect(() => {
      handleUpdateFollow();
  }, [tempTab]);

  return (
    <>
      <MyReviewTapMol tabs={tabs} tempTab={tempTab} setTempTab={setTempTab} />
      <ProfileFollowCardBoxMol tempUserData={tempUserData}/>
    </>
  );
}

export default ProfileFollowTmp;
