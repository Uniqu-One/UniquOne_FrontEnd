import styled from "@emotion/styled";
import React, { useEffect } from "react";
import PostFollowMol from "./PostFollowMol";
import PostFuncBarMol from "./PostFuncBarMol";
import PostSliderMol from "./PostSliderMol";
import PostUserMol from "./PostUserMol";

const PostCarTmpStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px 21px 0px 18px;
  padding-top: 3px;
`;

function PostCardTmp(props: { postId: string|number }) {
  
  return (
    <>
      <PostCarTmpStyle>
        <PostUserMol userName={"strongMinsu"} />
        <PostFollowMol />
      </PostCarTmpStyle>

      <PostSliderMol postId={props.postId} />

      <PostFuncBarMol postId={props.postId}/>
    </>
  );
}

export default PostCardTmp;
