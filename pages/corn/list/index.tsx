import React from 'react'
import TopTmp from '../../../components/common/tmp/TopTmp'
import CornMyPostListTmp from '../../../components/corn/post/CornMyPostListTmp'

function Index() {
  return (
    <>
      <TopTmp text='내 포스트 보기'/>
      <CornMyPostListTmp/>
    </>
  )
}

export default Index