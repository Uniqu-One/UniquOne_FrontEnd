import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import LoginFindLink from "../../components/common/mol/LoginFindLink";
import TopTmp from "../../components/common/tmp/TopTmp";
import LoginTmp from "../../components/login/LoginTmp";

const LoginPageInterval = styled.div`
  div {
    :nth-child(1) {
      margin-top: 27px;
    }
    :nth-child(3) {
      margin-top: 24px;
    }
    :last-child {
      margin-top: 15px;
    }
  }
`;

function index() {
  return (
    <>
      <TopTmp type="arrowText" />
      <LoginPageInterval>
        <LoginTmp />
        <LoginFindLink text="혹시 비밀번호를 잊으셨나요?" link="/find"/>
      </LoginPageInterval>
    </>
  );
}

export default index;
