import styled from "@emotion/styled";
import React from "react";
import { color } from "../../styles/theme";
import MainRecStyleSelectMol from "./MainRecStyleSelectMol";
import MainRecStyleSlideMol from "./MainRecStyleSlideMol";

const MainRecStyleIntervalTmpStyle = styled.div`
  padding-top: 18px;
  padding-bottom: 18px;
  background-color: ${color.p_gray_lt};
`;

function MainRecStyleTmp() {
  return (
    <>
      <MainRecStyleIntervalTmpStyle>
        <MainRecStyleSelectMol />
        <MainRecStyleSlideMol />
      </MainRecStyleIntervalTmpStyle>
    </>
  );
}

export default MainRecStyleTmp;
