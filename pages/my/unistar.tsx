import React from 'react'
import PostMdOrg from '../../components/common/org/PostMdOrg'
import FooterTmp from '../../components/common/tmp/FooterTmp'
import TopTmp from '../../components/common/tmp/TopTmp'
import MyUniStarTmp from '../../components/my/MyUniStarTmp'
import { ProfileContentsStyle } from '../../components/profile/ProfileContentTmp'

function UniStar() {
  return (
    <>
    <TopTmp type="setting" text="유니스타"/>
    <MyUniStarTmp/>
    <ProfileContentsStyle>
      <PostMdOrg />
      <PostMdOrg />
      <PostMdOrg />
      <PostMdOrg />
      <PostMdOrg />
      <PostMdOrg />
    </ProfileContentsStyle>
    
    <FooterTmp/>
    </>
  )
}

export default UniStar