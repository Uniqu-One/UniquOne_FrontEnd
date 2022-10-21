import React from 'react'
import FooterTmp from '../../../components/common/tmp/FooterTmp'
import TopTmp from '../../../components/common/tmp/TopTmp'
import CornMyPostListTmp from '../../../components/corn/post/CornMyPostListTmp'

function Index() {
  return (
    <>
      <TopTmp text='내 포스트 리스트'/>
      <CornMyPostListTmp/>
      <FooterTmp/>
    </>
  )
}

export default Index