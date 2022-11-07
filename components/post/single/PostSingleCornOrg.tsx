import styled from "@emotion/styled";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { postDataType } from "../../../types/postDataType";
import PostSingleCornDetailMol from "./PostSingleCornDetailMol";
import PostSingleProfileMol from "./PostSingleProfileMol";

const PostSingleCornOrgStyle = styled.div`
  padding: 12px 18px;
  /* background-color: gray; */
  > div {
    :nth-of-type(1) {
      margin-bottom: 12px;
    }
    :nth-of-type(2) {
      margin-bottom: 12px;
    }

    h3 {
      font-size: 0.875rem;
      font-weight: 750;
    }
  }
`;

function PostSingleCornOrg(props:{postDetailData:postDataType}) {

  const cornId = props.postDetailData.cornId

  const [tempData,setTempData] = useState({})

  useEffect(() => {

    axios.get(`${process.env.NEXT_PUBLIC_URL_AWS}/posts/posts/detail/cornInfo/${cornId}`)
    .then(res => setTempData(res.data.data))
    .catch(err => console.error(err))

  },[])

// @ts-ignore
  if(tempData.userId === undefined){
    return <div>준비중</div>
  }

  return (
    <PostSingleCornOrgStyle>
      <div>
      {/* @ts-ignore */}
        <h3>{tempData.userNickName}님의 콘</h3>
      </div>
      <PostSingleProfileMol tempData={tempData}/>
      <PostSingleCornDetailMol tempData={tempData}/>
    </PostSingleCornOrgStyle>
  );
}

export default PostSingleCornOrg;
