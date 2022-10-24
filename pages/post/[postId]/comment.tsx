import { GetServerSideProps } from 'next'
import React from 'react'
import CommentTmp from '../../../components/comment/CommentTmp'
import TopTmp from '../../../components/common/tmp/TopTmp'

function comment(props:{postId:string}) {
  return (
    <>
    <TopTmp type='comment'/>
    <CommentTmp postId={props.postId}/>
    </>
  )
}

export default comment

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { postId } = query;

  return {
    props: {
      postId,
    },
  };
};
