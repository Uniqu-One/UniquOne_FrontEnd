import { useRouter } from 'next/router'
import React from 'react'
import FooterTmp from '../../components/common/tmp/FooterTmp'
import TopTmp from '../../components/common/tmp/TopTmp'
import ProfileFollowTmp from '../../components/profile/ProfileFollowTmp'

function follow() {

  return (
    <>
    <TopTmp text='팔로우'/>

    <ProfileFollowTmp type="my"/>

    <FooterTmp/>
    </>
  )
}

export default follow