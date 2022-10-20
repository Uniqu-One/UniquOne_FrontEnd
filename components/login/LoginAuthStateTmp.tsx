import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { LoginAuthState } from "../../states/recoil/LoginAuthState";
import { TokenState } from "../../states/recoil/TokenState";

function LoginAuthStateTmp() {
  const [loginAuthState,setLoginAuthState] = useRecoilState(LoginAuthState);
  const tokenState = useRecoilValue(TokenState);
  
  useEffect(() => {

    if(loginAuthState === false){
      if(tokenState){
        setLoginAuthState(true)
      }
    }

  },[])

  return <></>;
}

export default LoginAuthStateTmp;
