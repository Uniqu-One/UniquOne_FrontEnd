import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { UniStarUtils } from "../../../lib/utils/UniStarUtils";
import { TokenState } from "../../../states/recoil/TokenState";
import UniStarMol from "../mol/UniStarMol";

const PostMdOrgStyle = styled.div`
  position: relative;

  width: calc((100vw - 6px) / 3);
  height: calc((100vw - 6px) / 3);

  img {
    border-radius: 9px;
  }

.unistar_icon{
  
    position: absolute;
    bottom: 2px;
    right: 1px;
    z-index: 3;
  
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

  const [tempStar, setTempStar] = useState<number|null|string|undefined>(null)
  const token =useRecoilValue(TokenState).token
  const {postId} = props.post

  const updateUniStar = async() => {

    if(tempStar === null || tempStar === 0){
      UniStarUtils.enrollUniStar(token,postId)
      setTempStar(1)
    }

    if(tempStar === 1){
      UniStarUtils.pathchUniStar(token,postId,2)
      setTempStar(2)
    }

    if(tempStar === 2){
      UniStarUtils.pathchUniStar(token,postId,3)
      setTempStar(3)
    }

    if(tempStar ===3){
      UniStarUtils.deleteUniStar(token,postId)
      setTempStar(0)
    }

  }

  useEffect(() => {
    setTempStar(props.post?.uniStarLevel)
  },[])

  return (
    <PostMdOrgStyle>
      <Link href={props.post ? `/post/${props.post.postId}` : "/"}>
        <a>
          <Image loading="lazy"
            src={props.post ? props.post.postImg : "/assets/images/postImage.jpg"}
            alt="포스트 더미 이미지"
            width={300}
            height={300}
          />
        </a>
      </Link>
      <div className="unistar_icon" onClick={() => updateUniStar()}>
        <UniStarMol tempStar={tempStar}/>
      </div>
    </PostMdOrgStyle>
  );
}

export default PostMdOrg;
