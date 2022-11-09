import styled from "@emotion/styled";
import React from "react";
import { useRecoilValue } from "recoil";
import { UserInfoState } from "../../states/recoil/UserInfoState";
import { color } from "../../styles/theme";
import MainRecStyleSelectMol from "./MainRecStyleSelectMol";
import MainRecStyleSlideMol from "./MainRecStyleSlideMol";

const MainRecStyleIntervalTmpStyle = styled.div`
  margin-top: 30px;
  padding-top: 18px;
  padding-bottom: 18px;
  background-color: ${color.p_gray_lt};
  border-radius: 0 0 12px 12px;
  box-shadow: 1px 2px 2px 1px #00000030;
  
`;

function MainRecStyleTmp() {

  const userNickName = useRecoilValue(UserInfoState).userNickName

  if(userNickName === undefined){
    return <></>
  }

  return (
    <>
      <MainRecStyleIntervalTmpStyle>
        <MainRecStyleSelectMol userNickName={userNickName}/>
        <MainRecStyleSlideMol />
      </MainRecStyleIntervalTmpStyle>
    </>
  );
}

export default MainRecStyleTmp;
