import styled from "@emotion/styled";
import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import TopTmp from "../../../components/common/tmp/TopTmp";
import PostCardTmp from "../../../components/post/PostCardTmp";
import PostSingleBodyOrg from "../../../components/post/single/PostSingleBodyOrg";
import PostSingleCornOrg from "../../../components/post/single/PostSingleCornOrg";
import PostSingleFooterTmp from "../../../components/post/single/PostSingleFooterTmp";
import { PostUtils } from "../../../lib/utils/PostUtils";
import { ToastUtils } from "../../../lib/utils/ToastUtils";
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
      console.log(1)
      ToastUtils.success('N명의 유저가 이 게시물을 좋아해요!')
      updateDetailPostData()
    }
  },[])

  // console.log(postDetailData.title)

  if(postDetailData === undefined){
    return <div>로딩중</div>
  }

  return (
    <>
      <PostIntervalStyle>
        <TopTmp type="postDetail"/>

        <PostCardTmp postId={postId} postDetailData={postDetailData}/>
          {/* @ts-ignore */}
        <PostSingleBodyOrg userId={postDetailData?.title} postDetailData={postDetailData}/>

              <PostSingleDummyIntervalStyle/>

        {/* 콘 부분 */}
        <PostSingleCornOrg/>
        
              <PostSingleDummyIntervalStyle/>

        <PostSingleFooterTmp postId={postId}/>

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


