import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import UniStarMol from "../mol/UniStarMol";

const PostMdOrgStyle = styled.div`
  position: relative;

  img {
    border-radius: 9px;
  }

  > span:last-child {
    position: absolute;
    right: 12px;
    bottom: 12px;
  }
`;

function PostMdOrg(props: { opt?: string }) {
  return (
    <PostMdOrgStyle>
      <Link href={"/"}>
        <a>
          <Image
            src="/assets/images/postImage.jpg"
            alt="포스트 더미 이미지"
            width={148}
            height={148}
          />
        </a>
      </Link>

      {props.opt ? <UniStarMol /> : <span></span>}
    </PostMdOrgStyle>
  );
}

export default PostMdOrg;
