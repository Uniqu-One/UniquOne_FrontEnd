import React from 'react'
import { useResetRecoilState } from 'recoil'
import FooterTmp from '../../components/common/tmp/FooterTmp'
import TopTmp from '../../components/common/tmp/TopTmp'
import CornPostTmp from '../../components/corn/post/CornPostTmp'
import { CornPostState } from '../../states/recoil/CornPostState'

function post() {
  
  const resetCornPostData = useResetRecoilState(CornPostState)

  return (
    <>
    <TopTmp text="새 포스트 등록" function={resetCornPostData}/>
    <CornPostTmp/>
    </>
  )
}

export default post