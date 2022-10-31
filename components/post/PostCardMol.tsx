import styled from "@emotion/styled";
import React from "react";
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
  .right {
    display: flex;
    > div {
      margin: auto 0;
      margin-left: 12px;
    }
  }
`;

export type PostDataType = {};

function PostCardMol(props: { postId: number | string; postDetailData: any }) {
  const { postId, postDetailData } = props;
  const {
    colorList,
    condition,
    dsc,
    lookId,
    postCategoryId,
    postTagList,
    postType,
    productSize,
    title,
  } = props.postDetailData;

  console.log(postDetailData);

  return (
    <>
      <PostCarTmpStyle>
        <div>
          <PostUserMol userName={"strongMinsu"} />
        </div>
        <div className="right">
          <PostFollowMol postId={postId} />
          <ThreeDotMol postId={postId} />
        </div>
        
      </PostCarTmpStyle>

      <PostSliderMol postId={postId} />

      {/* 하트랑 유니스타랑 댓글 */}
      <PostFuncBarMol postId={postId} />
    </>
  );
}

export default PostCardMol;
