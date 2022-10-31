import React from "react";
import PostCardMol from "./PostCardMol";

function PostCardTmp(props: { postId: string | number; postDetailData: {} }) {

  const {postId, postDetailData} = props;

  return (
    <>
      <PostCardMol postId={postId} postDetailData={postDetailData}/>
    </>
  );
}

export default PostCardTmp;
