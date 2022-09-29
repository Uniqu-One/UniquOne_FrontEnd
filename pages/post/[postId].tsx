import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React from "react";
import FooterTmp from "../../components/common/tmp/FooterTmp";
import TopTmp from "../../components/common/tmp/TopTmp";
import PostCardTmp from "../../components/post/PostCardTmp";
import PostSingleBodyMol from "../../components/post/PostSingleBodyMol";
import PostSingleCornMol from "../../components/post/PostSingleCornMol";

const PostIntervalStyle = styled.div`
  width: 100vw;
  overflow: hidden;

  > div {
    :nth-of-type(2) {
      margin-top: 48px;
    }

    :nth-last-child(2) {
      margin-bottom: 54px;
    }
  }
`;

function PostId() {
  const router = useRouter();
  const postId = Number(router.query.postId);

  return (
    <>
      <PostIntervalStyle>
        <TopTmp type="post"/>

        <PostCardTmp postId={postId}/>
        <PostSingleBodyMol/>
        <PostSingleCornMol/>

        <FooterTmp/>
      </PostIntervalStyle>
    </>
  );
}

export default PostId;
