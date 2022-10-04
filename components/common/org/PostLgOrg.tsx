import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import UniStarMol from "../mol/UniStarMol";

// TODO - 메인 카테고리 부분 스타일은 나중에 손보기

const PostLgOrgStyle = styled.div`
  width: calc( ( 100vw - 48px ) / 2);
  position: relative;
  
  img {
    border-radius: 9px;
  }

  > span:last-child{
    position: absolute;
    right: 12px;
    bottom: 12px;
  }
`;

function PostLgOrg(props:{opt?:string}) {
  return (
    <PostLgOrgStyle >

        <Image
          src="/assets/images/postImage.jpg"
          alt="포스트 더미 이미지"
          width={250}
          height={250}
        />


      {props.opt ? <UniStarMol/>: <span></span>}

    </PostLgOrgStyle>
  );
}

export default PostLgOrg;
