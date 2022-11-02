import Link from "next/link";
import React from "react";
import PostCommentAtm from "./PostCommentAtm";

function PostCommentMol(props:{postId:string|number}) {
  return (
    <>
      <Link href={`/post/${props.postId}/comment`}>
        <a>
          <PostCommentAtm />
        </a>
      </Link>
    </>
  );
}

export default PostCommentMol;
