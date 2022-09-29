import Link from "next/link";
import React from "react";
import PostCommentAtm from "./PostCommentAtm";

function PostCommentMol() {
  const postId = 1;
  return (
    <>
      <Link href={`/post/${postId}/comment`}>
        <a>
          <PostCommentAtm />
        </a>
      </Link>
    </>
  );
}

export default PostCommentMol;
