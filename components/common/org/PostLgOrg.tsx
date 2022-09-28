import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import UniStarMol from "../mol/UniStarMol";

const PostLgOrgStyle = styled.div`
  width: 172px;
  height: 172px;
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
      <Link href={"/"}>
        <Image
          src="/assets/images/postImage.jpg"
          alt="포스트 더미 이미지"
          width={172}
          height={172}
        />
      </Link>

      {props.opt ? <UniStarMol/>: <span></span>}

    </PostLgOrgStyle>
  );
}

export default PostLgOrg;
