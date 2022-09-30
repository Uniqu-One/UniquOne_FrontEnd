import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React, { useState } from "react";
import FooterTmp from "../../../components/common/tmp/FooterTmp";
import TopTmp from "../../../components/common/tmp/TopTmp";
import PostCardTmp from "../../../components/post/PostCardTmp";
import PostSingleBodyOrg from "../../../components/post/PostSingleBodyOrg";
import PostSingleCornOrg from "../../../components/post/PostSingleCornOrg";
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

function PostId() {
  const router = useRouter();
  const postId = Number(router.query.postId);

  return (
    <>
      <PostIntervalStyle>
        <TopTmp type="post"/>

        <PostCardTmp postId={postId}/>
        <PostSingleBodyOrg userId={"userID"}/>

        <PostSingleDummyIntervalStyle/>
        <PostSingleCornOrg/>
        <PostSingleDummyIntervalStyle/>

        <FooterTmp/>
      </PostIntervalStyle>
    </>
  );
}

export default PostId;