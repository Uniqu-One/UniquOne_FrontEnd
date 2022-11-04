import styled from "@emotion/styled";
import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { UniStarUtils } from "../../lib/utils/UniStarUtils";
import { TokenState } from "../../states/recoil/TokenState";
import UniStarMol from "../common/mol/UniStarMol";
import PostCommentAtm from "./PostCommentAtm";
import PostCommentMol from "./PostCommentMol";
import PostHeartAtm from "./PostHeartAtm";
import PostHeartMol from "./PostHeartMol";

const PostFuncBarMolStyle = styled.div`
  height: 54px;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;

  div {
    z-index: 1;

    :first-of-type {
      margin: auto 21px auto 18px;
      svg {
        margin-right: 9px;
      }
    }
    :last-of-type {
      margin: auto 9px auto 0;
    }
  }

  .icons {
    display: flex;
    div {
      margin-right: 6px;
    }
  }
`;

function PostFuncBarMol(props:{postId:number|string,isCool:boolean,uniStar:null|number}) {
  const token = useRecoilValue(TokenState).token;
  const {postId, isCool,uniStar} = props
  const [tempStar,setTempStar] = useState(uniStar)

  console.log('렌더링')

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

  return (
    <PostFuncBarMolStyle>
      <div className="icons">
        <PostHeartMol postId={props.postId} isCool={isCool}/>
        <PostCommentMol postId={postId}/>
      </div>

      <div className="uni_star" onClick={() => updateUniStar()}>
        <UniStarMol tempStar={tempStar} setTempStar={setTempStar}/>
      </div>
    </PostFuncBarMolStyle>
  );
}

export default PostFuncBarMol;
