import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import { color } from "../../../styles/theme";
import UniStarMol from "../mol/UniStarMol";

// TODO - 메인 카테고리 부분 스타일은 나중에 손보기

const PostLgOrgStyle = styled.div`
  position: relative;
  
  border-radius: 9px;
  img {
    border: 1px solid ${color.p_gray_lt};
    border-radius: 9px;
    width: calc((100vw - 36px)/2);
  }

`;

function PostLgOrg(props: { opt?: string; imgSrc?: string; postId?:string}) {
  const {imgSrc } = props;

  return (
    <PostLgOrgStyle>
      
      <img 
        src={imgSrc ? imgSrc : "/assets/images/postImage.jpg"}
        alt="포스트 더미 이미지"
        width={`calc(100% - 10px)`}
        height="auto"
        // layout="fill"
      />
      
    </PostLgOrgStyle>
  );
}

export default PostLgOrg;
