import { GetServerSideProps } from 'next'
import React from 'react'
import { useResetRecoilState } from 'recoil'
import FooterTmp from '../../../components/common/tmp/FooterTmp'
import TopTmp from '../../../components/common/tmp/TopTmp'
import CornPostTmp from '../../../components/corn/post/CornPostTmp'
import { CornPostState } from '../../../states/recoil/CornPostState'

function ListPostId(props:{postId:string}) {

  const resetPostData = useResetRecoilState(CornPostState)
  return (
    <>
    <TopTmp text="내 포스트 수정" function={resetPostData}/>
    <CornPostTmp postId={props.postId}/>
    </>
  )
}

export default ListPostId

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { postId } = query;

  return {
    props: {
      postId,
    },
  };
};
