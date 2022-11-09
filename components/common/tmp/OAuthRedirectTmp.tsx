import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Puff } from "react-loader-spinner";
import { useRecoilState } from "recoil";
import { LoginAuthState } from "../../../states/recoil/LoginAuthState";
import { TokenState } from "../../../states/recoil/TokenState";
import { color } from "../../../styles/theme";
import { ToastUtils } from "./ToastTmp";

const OAuthRedirectTmpStyle = styled.div`
  text-align: center;
  div{
    justify-content: center;
    margin-top: 24vh;
  }
  p{
    margin-top: 24px;
    font-size: 0.875rem;
    color: ${color.p_gray_md};
  }
`;

function OAuthRedirectTmp(props:{token:string}) {
  const router = useRouter()
  const [loginAtuh,setLoginAuth] = useRecoilState(LoginAuthState);
  const [token,setToken] = useRecoilState(TokenState)


  useEffect(() => {
    setToken((prev:{}) => ({...prev,token:props.token}))
    setLoginAuth(true);
  },[])


  useEffect(() => {
    if(loginAtuh){
      ToastUtils.toast("🦄 환영합니다 :)")
      window.location.replace('/')
    }

  },[loginAtuh])

  return (
    <>
      <OAuthRedirectTmpStyle>
        <div>
          <Puff
            height="120"
            width="120"
            color={color.p_pruple}
            ariaLabel="puff-loading"
            radius={1}
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
        <p>로그인이 진행중입니다 :{")"}</p>
      </OAuthRedirectTmpStyle>
    </>
  );
}

export default OAuthRedirectTmp;
