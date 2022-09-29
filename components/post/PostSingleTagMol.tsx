import Link from "next/link";
import React from "react";

function PostSingleTagMol(props: { tag: string }) {
  return (
    <>
      <Link href="/">
        <a>
        <p>#{props.tag}</p>
        </a>
      </Link>
    </>
  );
}

export default PostSingleTagMol;
