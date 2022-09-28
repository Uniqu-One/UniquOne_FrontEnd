import styled from "@emotion/styled";
import React from "react";
import { color } from "../../styles/theme";
import PostLgOrg from "../common/org/PostLgOrg";
import MainContentTitleAtm from "./MainContentTitleAtm";

const MainRecContentStyle = styled.div`
  margin-top: 30px;

  background-color: ${color.p_gray_lt};
  padding: 18px 18px 18px 18px;

  h2{
    margin-bottom: 12px;
  }
  
  >div{
    /* background-color: red; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    div{
      margin-bottom: 6px;
      margin-right: 6px;
    }
  }

  `;

function MainRecContentTmp(props:{title:string}) {
  return (
    <>
      <MainRecContentStyle>
        <MainContentTitleAtm title={props.title} />
        <div>
          <PostLgOrg />
          <PostLgOrg />
          <PostLgOrg />
          <PostLgOrg />
        </div>
      </MainRecContentStyle>
    </>
  );
}

export default MainRecContentTmp;
