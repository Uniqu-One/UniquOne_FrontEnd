import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import MyReviewTapMol from '../review/MyReviewTapMol'
import ProfileFollowCardBoxMol from './ProfileFollowCardBoxMol';

//TODO - tapModal용 공통 컴포넌트 생성

function ProfileFollowTmp() {

  const route = useRouter()

  const tabs = ["팔로워", "팔로잉"];
  const [tempTab, setTempTab] = useState(0);

  useEffect(() => {
    if(route.query.click){
      setTempTab(0)
    } else{
      setTempTab(1)
    }
  },[])

  return (
    <>
        <MyReviewTapMol tabs={tabs} tempTab={tempTab} setTempTab={setTempTab} />
        <ProfileFollowCardBoxMol/> 
    </>
  )
}

export default ProfileFollowTmp