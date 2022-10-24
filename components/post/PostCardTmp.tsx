import styled from "@emotion/styled";
import React, { useEffect } from "react";
import ThreeDotMol from "../common/mol/ThreeDotMol";
import PostFollowMol from "./PostFollowMol";
import PostFuncBarMol from "./PostFuncBarMol";
import PostSliderMol from "./PostSliderMol";
import PostUserMol from "./PostUserMol";

const PostCarTmpStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px 21px 0px 18px;
  padding-top: 3px;
  .right{
    display: flex;
    > div{
      margin: auto 0;
      margin-left: 12px;
    }
  }
`;

function PostCardTmp(props: { postId: string | number }) {
  return (
    <>
      <PostCarTmpStyle>
        <div>
          <PostUserMol userName={"strongMinsu"} />
        </div>
        <div className="right">
          <PostFollowMol />
          <ThreeDotMol postId={props.postId}/>
        </div>
      </PostCarTmpStyle>

      <PostSliderMol postId={props.postId} />

      <PostFuncBarMol postId={props.postId} />
    </>
  );
}

export default PostCardTmp;
