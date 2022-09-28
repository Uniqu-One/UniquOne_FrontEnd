import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import UniStarMol from "../mol/UniStarMol";

const PostSmOrgStyle = styled.div<{size?:number}>`
  width: ${(props) => props.size+"px"};
  height: ${(props) => props.size+"px"};;
  position: relative;
  
  img {
    border-radius: 6px;
  }

`;

function PostSmOrg(props:{size?:number}) {
  return (
    <PostSmOrgStyle size={props.size ? props.size: undefined}>
      <Link href={"/"}>
        <Image
          src="/assets/images/postImage.jpg"
          alt="포스트 더미 이미지"
          width={props.size}
          height={props.size}
        />
      </Link>

    </PostSmOrgStyle>
  );
}

export default PostSmOrg;
