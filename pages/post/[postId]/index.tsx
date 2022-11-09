import styled from "@emotion/styled";
import { GetServerSideProps } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { ToastUtils } from "../../../components/common/tmp/ToastTmp";
import TopTmp from "../../../components/common/tmp/TopTmp";
import PostCardTmp from "../../../components/post/PostCardTmp";
import PostSingleBodyOrg from "../../../components/post/single/PostSingleBodyOrg";
import PostSingleCornOrg from "../../../components/post/single/PostSingleCornOrg";
import PostSingleFooterTmp from "../../../components/post/single/PostSingleFooterTmp";
import { PostUtils } from "../../../lib/utils/PostUtils";
import { HeadTitleList } from "../../../public/assets/datas/headTitleList";

import { TokenState } from "../../../states/recoil/TokenState";
import { color } from "../../../styles/theme";


const PostIntervalStyle = styled.div`
  width: 100vw;
  overflow: hidden;

  > div {
    :nth-of-type(2) {
      margin-top: 48px;
    }

    :nth-last-of-type(2) {
      margin-bottom: 54px;
    }
  }
`;

const PostSingleDummyIntervalStyle = styled.div`
  height: 24px;
  background-color: ${color.p_gray_lt};
`

function PostId(props:{postId:string}) {
  const token = useRecoilValue(TokenState).token
  const postId = props.postId
  const [postDetailData, setPostDetailData] = useState()

  const updateDetailPostData = async () => {
setPostDetailData(await PostUtils.getPostDetailData(token,postId))
  }

  useEffect(() => {
    if(token && postId){
      updateDetailPostData()
    }
  },[])



  if(postDetailData === undefined){
    return <div></div>
  }

  return (
    <>
          <Head>
        <title>{HeadTitleList.postDetail}</title>
      </Head>
      <PostIntervalStyle>
        <TopTmp type="postDetail"/>

        <PostCardTmp postId={postId} postDetailData={postDetailData}/>
          {/* @ts-ignore */}
        <PostSingleBodyOrg userId={postDetailData?.title} postDetailData={postDetailData}/>

              <PostSingleDummyIntervalStyle/>

        {/* 콘 부분 */}
        <PostSingleCornOrg postDetailData={postDetailData}/>
        
              <PostSingleDummyIntervalStyle/>

        <PostSingleFooterTmp postId={postId} postDetailData={postDetailData}/>

      </PostIntervalStyle>
    </>
  );
}

export default PostId;

export const getServerSideProps: GetServerSideProps = async (context) => {

  const { query } = context;
  const { postId } = query;

  return {
    props: {
      postId,
    },
  };
};


