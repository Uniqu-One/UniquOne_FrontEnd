import React from 'react'
import { useResetRecoilState } from 'recoil'
import FooterTmp from '../../../components/common/tmp/FooterTmp'
import TopTmp from '../../../components/common/tmp/TopTmp'
import CornPostTmp from '../../../components/corn/post/CornPostTmp'
import { CornPostState } from '../../../states/recoil/CornPostState'

function ListPostId() {

  const resetPostData = useResetRecoilState(CornPostState)

  return (
    <>
    <TopTmp text="내 포스트 수정" function={resetPostData}/>
    <CornPostTmp/>
    </>
  )
}

export default ListPostId