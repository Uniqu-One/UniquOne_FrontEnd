import styled from "@emotion/styled";
import { useRouter } from "next/router";
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

function PostSingleCornDetailMol(props:{tempData:{}}) {

  console.log(props.tempData)

  //@ts-ignore
  const {cornId, postEA, reviewEA} = props.tempData


  const router = useRouter()

  return (
    <>
      <PostSingleCornDetailMolStyle>
        <div onClick={() => router.push(`/profile/${cornId}`)}>
          <p>포스트</p>
          <p>{postEA}<span>{'>'}</span></p>
        </div>
        <div onClick={() => router.push(`/profile/${cornId}`)}>
          <p>리뷰</p>
          <p>{reviewEA}<span>{'>'}</span></p>
        </div>
      </PostSingleCornDetailMolStyle>
    </>
  );
}

export default PostSingleCornDetailMol;
