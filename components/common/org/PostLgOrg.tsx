import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { color } from "../../../styles/theme";
import UniStarMol from "../mol/UniStarMol";

// TODO - 메인 카테고리 부분 스타일은 나중에 손보기

const PostLgOrgStyle = styled.div`
  position: relative;
  border: 1px solid ${color.p_gray_lt};
  border-radius: 9px;
  img {
    border-radius: 9px;
  }
  
/* 
  > span:last-child {
    position: absolute;
    right: 12px;
    bottom: 12px;
  } */
`;

function PostLgOrg(props: { opt?: string; imgSrc?: string }) {
  const { opt, imgSrc } = props;

  return (
    <PostLgOrgStyle>
      <Image
        src={imgSrc ? imgSrc : "/assets/images/postImage.jpg"}
        alt="포스트 더미 이미지"
        width={400}
        height={400}
        // layout="fill"
      />
      {/* @ts-ignore */}
      {opt ? <UniStarMol /> : <span></span>}
    </PostLgOrgStyle>
  );
}

export default PostLgOrg;
