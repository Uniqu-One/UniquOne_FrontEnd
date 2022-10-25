import styled from "@emotion/styled";
import React from "react";
import { color } from "../../../styles/theme";
import SmBtnAtm from "../../common/atm/SmBtnAtm";

const PostSingleDetailBoxStyle = styled.div`
  margin-top: 18px;
  margin-bottom: 12px;
  div {
    margin-right: 6px;
  }
`;

function PostSingleDetailOrg() {
  return (
    <>
      <PostSingleDetailBoxStyle>
        <SmBtnAtm color={"blue"} text="파랑" />
        <SmBtnAtm color={"white"} text="걸리시" />
        <SmBtnAtm color={"white"} text="아메카지" />

        <SmBtnAtm color={color.p_gray_lt} text="Size L" />
        <SmBtnAtm color={color.p_gray_lt} text="중고-신품" />
      </PostSingleDetailBoxStyle>
    </>
  );
}

export default PostSingleDetailOrg;
