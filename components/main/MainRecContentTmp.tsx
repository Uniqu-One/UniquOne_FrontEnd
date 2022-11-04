import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { PostUtils } from "../../lib/utils/PostUtils";
import { color } from "../../styles/theme";
import PostLgOrg from "../common/org/PostLgOrg";
import MainContentTitleAtm from "./MainContentTitleAtm";

const MainRecContentStyle = styled.div`
  margin-top: 30px;

  background-color: ${color.p_gray_lt};
  padding: 18px 18px 18px 18px;

  h2 {
    margin-bottom: 12px;
  }

  .item_container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    div {
      width: 48%;
      margin-bottom: 6px;
    }
  }
`;

function MainRecContentTmp(props: { title: string,type:string }) {
  const [tempData, setTempData] = useState([]);
  const type = props.type

  const updateTempSeasonsData = async () => {
    setTempData(await PostUtils.getThisSeasonsData(type));
  };

  useEffect(() => {
    updateTempSeasonsData();
  }, []);

  return (
    <>
      <MainRecContentStyle>
        <MainContentTitleAtm title={props.title} />
        <div className="item_container">
          {tempData && tempData.map((data:{postImgUrl:string}, idx) => {
            return <PostLgOrg key={idx} imgSrc={data.postImgUrl}/>;
          })}
        </div>
      </MainRecContentStyle>
    </>
  );
}

export default MainRecContentTmp;
