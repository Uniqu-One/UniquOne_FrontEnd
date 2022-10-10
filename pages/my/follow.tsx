import { useRouter } from 'next/router'
import React from 'react'
import FooterTmp from '../../components/common/tmp/FooterTmp'
import TopTmp from '../../components/common/tmp/TopTmp'
import ProfileFollowTmp from '../../components/profile/ProfileFollowTmp'

function follow() {

  return (
    <>
    <TopTmp text='userName'/>

    <ProfileFollowTmp/>

    <FooterTmp/>
    </>
  )
}

export default follow