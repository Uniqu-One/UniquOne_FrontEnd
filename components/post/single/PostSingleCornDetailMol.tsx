import styled from "@emotion/styled";
import React from "react";
import { color } from "../../../styles/theme";


const PostSingleCornDetailMolStyle = styled.div`
div{
  /* background-color: purple; */
  line-height: 30px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  border-bottom: 0.5px solid ${color.p_gray_lt};
  span{
    margin-left: 6px;
  }
}
`;

function PostSingleCornDetailMol() {
  return (
    <>
      <PostSingleCornDetailMolStyle>
        <div>
          <p>모든 리뷰</p>
          <p>120 <span>{'>'}</span></p>
        </div>
        <div>
          <p>모든 리뷰</p>
          <p>120 <span>{'>'}</span></p>
        </div>
      </PostSingleCornDetailMolStyle>
    </>
  );
}

export default PostSingleCornDetailMol;
