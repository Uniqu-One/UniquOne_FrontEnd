import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import UniStarMol from "../mol/UniStarMol";

const PostMdOrgStyle = styled.div`
  position: relative;

  width: calc((100vw - 6px) / 3);
  height: calc((100vw - 6px) / 3);

  img {
    border-radius: 9px;
  }

  > span:last-child {
    position: absolute;
    right: 12px;
    bottom: 12px;
  }
`;

function PostMdOrg(props: {
  opt?: string;
  post?: {
    postId: number;
    postImg: string;
    postType?: string;
    uniStarLevel?: number;
  };
}) {
  // cosnt {}

  //postId, uniStarId, postImgUrl

  console.log(props.post, "here");

  return (
    <PostMdOrgStyle>
      <Link href={props.post ? `/post/${props.post.postId}` : "/"}>
        <a>
          <Image
            src={props.post ? props.post.postImg : "/"}
            alt="포스트 더미 이미지"
            width={300}
            height={300}
          />
        </a>
      </Link>

      {props.opt ? <UniStarMol /> : <span></span>}
    </PostMdOrgStyle>
  );
}

export default PostMdOrg;
