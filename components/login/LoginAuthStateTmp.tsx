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
  
  const updateUserInfo = async () => {
    setUserInfo(await LoginUtils.getUserInfo(token))
  }

  useEffect(() => {

    if(loginAuthState === false){
      if(token){
        updateUserInfo()
        setLoginAuthState(true)
      }
    }

  },[])

  return <></>;
}

export default LoginAuthStateTmp;
