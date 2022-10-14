import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import LoginFindLink from "../components/common/mol/LoginFindLink";
import TopTmp from "../components/common/tmp/TopTmp";
import LoginFormTmp from "../components/login/LoginFormTmp";

function login() {
  return (
    <> 
      <TopTmp type="arrowText" text="로그인"/>
        <LoginFormTmp />
        <LoginFindLink text="혹시 비밀번호를 잊으셨나요?" link="/find"/>
      
    </>
  ); 
}
  
export default login;
