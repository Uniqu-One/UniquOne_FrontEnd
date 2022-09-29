import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import PostFollowMol from "./PostFollowMol";
import PostFuncBarMol from "./PostFuncBarMol";
import PostSliderMol from "./PostSliderMol";
import PostUserMol from "./PostUserMol";

const PostCarTmpStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px 21px 0px 18px;
`;

function PostCardTmp(props: { postId: number }) {
  
  return (
    <>
      <PostCarTmpStyle>
        <PostUserMol userName={"strongMinsu"} />
        <PostFollowMol />
      </PostCarTmpStyle>

      <PostSliderMol postId={props.postId} />

      <PostFuncBarMol />
    </>
  );
}

export default PostCardTmp;
