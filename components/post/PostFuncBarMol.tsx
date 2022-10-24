import styled from "@emotion/styled";
import React from "react";
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
      /* background-color: red; */
    }
  }

  .icons {
    display: flex;
    div {
      margin-right: 6px;
    }
  }
`;

function PostFuncBarMol(props:{postId:number|string}) {
  return (
    <PostFuncBarMolStyle>
      <div className="icons">
        <PostHeartMol postId={props.postId}/>
        <PostCommentMol />
      </div>

      <div className="uni_star">
        <UniStarMol />
      </div>
    </PostFuncBarMolStyle>
  );
}

export default PostFuncBarMol;
