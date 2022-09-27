import styled from "@emotion/styled";
import React from "react";
import { GradiantBack } from "../../components/common/atm/GradiantBackAtm";
import LoginFindLink from "../../components/common/mol/LoginFindLink";
import LogoIconMol from "../../components/common/mol/LogoIconMol";
import BtnTmp from "../../components/common/tmp/BtnTmp";
import { color } from "../../styles/theme";

const IntroTitleStyle = styled.h1`
  font-size: 30px;
  font-weight: 800;
  background: linear-gradient(
    181.5deg,
    #e2b0f3 -14.74%,
    #e277de 44.02%,
    #79bbf9 98.08%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const IntroIntervalStyle = styled.div`
  height: 100vh;
  text-align: center;
  & > p{
    font-size: 14px;
    color: ${color.p_gray_dk};
  }
  div{
    :nth-child(1){
      padding-top: 104px;
      margin-bottom: 12px;
    }
    :nth-child(3){
      margin-top: 100px;
      margin-bottom: 6px;
    }
    :nth-child(4){
      margin-bottom: 6px;
    }
    :nth-child(5){
      margin-bottom: 6px;
    }
    :nth-child(6){
      margin-bottom: 6px;
    }
    :nth-child(7){
      margin-top: 6px;
      margin-bottom: 18px;
    }
    :last-child{
      margin-top: 6px;
    }
  }
  
`;

function index() {
  return (
    <>
    <GradiantBack>
      <IntroIntervalStyle>
        <LogoIconMol />
        <div>
          <IntroTitleStyle>UniquOne</IntroTitleStyle>
        </div>
        <BtnTmp size="kakao" />
        <BtnTmp size="naver" />
        <BtnTmp size="google" />
        <p>or</p>
        <BtnTmp size="entry" value="이메일로 시작하기" />
        <p>이미 계정을 소유하고 계신가요?</p>
        <LoginFindLink text="로그인하기" link="/login"/>
      </IntroIntervalStyle>
    </GradiantBack>
    </>
  );
}

export default index;
