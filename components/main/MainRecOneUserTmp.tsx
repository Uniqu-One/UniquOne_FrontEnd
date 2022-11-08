import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { PostUtils } from "../../lib/utils/PostUtils";
import { color } from "../../styles/theme";
import PostLgOrg from "../common/org/PostLgOrg";
import MainRecOneUserMol from "./MainRecOneUserMol";

const MainRecOneUserTmpStyle = styled.div`
  margin-top: 30px;

  background-color: ${color.p_gray_lt};
  padding: 18px 18px 18px 18px;

  .item_container {
    :last-of-type {
      margin-top: 12px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      div {
        width: 48%;
      }
    }
  }
`;

function MainRecOneUserTmp() {

  const [tempData,setTempData] = useState([])

  const handleUpdateData = async () => {
    setTempData(await PostUtils.getThisSeasonsData("OTC_1"))
  }

  useEffect(() => {

    handleUpdateData()

  },[])

  return (
    <>
      <MainRecOneUserTmpStyle>
        <MainRecOneUserMol />
        <div className="item_container">
          {tempData && tempData.map((data,idx) => {
            // @ts-ignore
            return <PostLgOrg postId={data.postId} imgSrc={data.postImgUrl} key={idx}/>
          })}
          
        </div>
      </MainRecOneUserTmpStyle>
    </>
  );
}

export default MainRecOneUserTmp;
