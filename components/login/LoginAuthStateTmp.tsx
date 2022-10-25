import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { LoginUtils } from "../../lib/utils/LoginUtils";
import { LoginAuthState } from "../../states/recoil/LoginAuthState";
import { TokenState } from "../../states/recoil/TokenState";
import { UserInfoState } from "../../states/recoil/UserInfoState";

function LoginAuthStateTmp() {
  const [loginAuthState,setLoginAuthState] = useRecoilState(LoginAuthState);
  const [userInfo,setUserInfo] = useRecoilState(UserInfoState)
  const token = useRecoilValue(TokenState).token;
  const router =useRouter()

  const updateUserInfo = async () => {
    setUserInfo(await LoginUtils.getUserInfo(token))
  }

  useEffect(() => {

    if(loginAuthState === false){
      if(token){
        updateUserInfo()
        setLoginAuthState(true)
      } else {
        alert('로그인이 필요한 기능입니다.')
        router.replace('/login')
      }
    }

  },[])

  return <></>;
}

export default LoginAuthStateTmp;
