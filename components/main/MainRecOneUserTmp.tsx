import styled from "@emotion/styled";
import React from "react";
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
  return (
    <>
      <MainRecOneUserTmpStyle>
        <MainRecOneUserMol />
        <div className="item_container">
          <PostLgOrg />
          <PostLgOrg />
          <PostLgOrg />
          <PostLgOrg />
        </div>
      </MainRecOneUserTmpStyle>
    </>
  );
}

export default MainRecOneUserTmp;
