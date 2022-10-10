import styled from "@emotion/styled";
import React from "react";
import PostSingleCornDetailMol from "./PostSingleCornDetailMol";
import PostSingleProfileMol from "./PostSingleProfileMol";

const PostSingleCornOrgStyle = styled.div`
  padding: 12px 18px;
  /* background-color: gray; */
  > div {
    :nth-of-type(1){
      /* background-color: red; */
      margin-bottom: 12px;
    }
    :nth-of-type(2){
      /* background-color: blue; */
      margin-bottom: 12px;
    }

    h3 {
      font-size: 0.875rem;
      font-weight: 750;
    }
  }
`;
//TODO - porps userName, CornImg, CornTitle, CornSub, ReviewCnt, PostCnt
function PostSingleCornOrg() {
  return (
    <PostSingleCornOrgStyle>
      <div>
        <h3>누구누구님의 Corn</h3>
      </div>
      <PostSingleProfileMol />
      <PostSingleCornDetailMol/>
    </PostSingleCornOrgStyle>
  );
}

export default PostSingleCornOrg;
