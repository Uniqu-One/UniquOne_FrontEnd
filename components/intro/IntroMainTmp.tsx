import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { color } from "../../styles/theme";
import { GradiantBack } from "../common/atm/GradiantBackAtm";
import LoginFindLink from "../common/mol/LoginFindLink";
import LogoIconMol from "../common/mol/LogoIconMol";
import BtnTmp from "../common/tmp/BtnTmp";

const IntroMainTmpStyle = styled(GradiantBack)`
  height: 100vh;
  text-align: center;
  padding-top: 78px;

  .btns {
    div {
      margin-top: 12px;
    }
  }

  .bottom_text {
    margin-top: 18px;

    font-size: 0.875rem;
    color: ${color.p_gray_dk};
    p {
      margin-top: 9px;
      text-decoration: underline;
    }

    div{
      
      display: flex;
      justify-content: center;
      a{
        color: ${color.p_gray_md};
        margin-left: 9px;
        margin-right: 9px;
      }
    }
  }

  .title {
    h1 {
      line-height: 42px;
    }
    margin-bottom: 24px;
  }
`;

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

function IntroMainTmp() {
  const router = useRouter();

  const handleKakaoLogin = () => {
    router.push("https://uniquone.shop/api/oauth2/authorization/kakao");
  };

  const handleNaverLogin = () => {
    router.push("https://uniquone.shop/api/oauth2/authorization/naver");
  };

  const handleGoogleLogin = () => {
    router.push("https://uniquone.shop/api/oauth2/authorization/google");
  };

  return (
    <IntroMainTmpStyle>
      <LogoIconMol />
      <div className="title">
        <IntroTitleStyle>UniquOne</IntroTitleStyle>
      </div>

      <div className="btns">
        <div className="kakao" onClick={() => handleKakaoLogin()}>
          <BtnTmp size="kakao" />
        </div>

        {/* <div className="naver" onClick={() => handleNaverLogin()}>
          <BtnTmp size="naver" />
        </div> */}

        <div className="google" onClick={() => handleGoogleLogin()}>
          <BtnTmp size="google" />
        </div>

        <div onClick={() => router.push("/signup")}>
          <BtnTmp size="email" value="이메일로 시작하기" />
        </div>
      </div>

      <div className="bottom_text">
        <h4>이미 계정을 소유하고 계신가요?</h4>
        <div>
        <Link href="/login">
          <a>
            <p>로그인 하기</p>
          </a>
        </Link>
        <Link href="/">
          <a>
            <p>홈페이지로 돌아가기</p>
          </a>
        </Link>
      </div>
      </div>
    </IntroMainTmpStyle>
  );
}

export default IntroMainTmp;
