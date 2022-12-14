import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { LoginUtils } from "../../lib/utils/LoginUtils";

import { LoginAuthState } from "../../states/recoil/LoginAuthState";
import { TokenState } from "../../states/recoil/TokenState";
import { UserInfoState } from "../../states/recoil/UserInfoState";
import { ToastUtils } from "../common/tmp/ToastTmp";

function LoginAuthStateTmp() {
  const [loginAuthState, setLoginAuthState] = useRecoilState(LoginAuthState);
  const [userInfo, setUserInfo] = useRecoilState(UserInfoState);
  const token = useRecoilValue(TokenState).token;
  const router = useRouter();
  const pathName = router.pathname.split("/")[1];

  const updateUserInfo = async () => {
    const userInfo = await LoginUtils.getUserInfo(token);
    setUserInfo(userInfo);
  };

  useEffect(() => {
    //login, / /post / profile
    if (loginAuthState === false) {
      if (token) {
        updateUserInfo();
        setLoginAuthState(true);
      } else {
        if (
          pathName === "" ||
          pathName === "login" ||
          pathName === "post" ||
          pathName === "profile" ||
          pathName === "intro" ||
          pathName === "signup"||
          pathName === "login" ||
          pathName === "redirect" ||
          pathName === "video" 
          
          
        ) {
          return;
        } else {
          ToastUtils.toast("로그인이 필요한 기능입니다.")
          router.replace("/intro"); 
        }
      }
    }
  }, [pathName]);

  return <></>;
}

export default LoginAuthStateTmp;
