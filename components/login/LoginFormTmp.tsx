import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";

import InputFormMol from "../common/mol/InputFormMol";
import BtnTmp from "../common/tmp/BtnTmp";
import { LoginUtils } from "../../lib/utils/LoginUtils";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { LoginAuthState } from "../../states/recoil/LoginAuthState";
import { TokenState } from "../../states/recoil/TokenState";
import { UserInfoState } from "../../states/recoil/UserInfoState";
import { ToastUtils } from "../common/tmp/ToastTmp";
const LoginFormTmpStyle = styled.div`
  padding-top: 60px;

  .input_form {
    margin-bottom: 6px;
  }

  .btn {
    margin-top: 12px;
  }
`;

function LoginFormTmp() {
  const router = useRouter();
  const [loginAuthState, setLoginAuthState] = useRecoilState(LoginAuthState);
  const [tokenState, setTokenState] = useRecoilState(TokenState);
  const [userInfo, setUserInfo] = useRecoilState(UserInfoState);

  const [inputs, setInputs] = useState({
    email: "",
    userPwd: "",
  });

  const [next, setNext] = useState(false);

  const { email, userPwd } = inputs;

  useEffect(() => {
    if (inputs.email !== "" && inputs.userPwd !== "") {
      setNext(true);
    } else {
      setNext(false);
    }
  }, [inputs]);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    if (next) {

      const userInfo = await LoginUtils.login(email, userPwd);

      if(userInfo){
        
      setTokenState({ token: userInfo.token });
        ToastUtils.toast('๐ฆ ํ์ํฉ๋๋ค :>')
        setLoginAuthState(true);
        window.location.replace('/')
      
      } else {
        ToastUtils.toast('๋ก๊ทธ์ธ์ ์คํจํ์์ต๋๋ค. ์ ๋ณด๋ฅผ ํ์ธํด์ฃผ์ธ์!')
      }
      

    }
  };

  const handleUpdateUserInfo = async () => {
    const userMiniInfo = await LoginUtils.getUserInfo(tokenState.token);
    if (userInfo && userMiniInfo) {
      setLoginAuthState(true);
      //@ts-ignore
      setUserInfo({...{
        userId: userMiniInfo.userId,
        cornId: userMiniInfo.cornId,
      }});
      

    }
  }

  

  return (
    <>
      <LoginFormTmpStyle>
        <div className="input_form">
          <InputFormMol
            setInput={setInputs}
            show={true}
            onChangeValue={onChangeValue}
            name="email"
            label="์ด๋ฉ์ผ"
            type="text"
            text="์ด๋ฉ์ผ์ ์๋ ฅํด์ฃผ์ธ์"
            value={email}
          />
        </div>
        <div className="input_form">
          <InputFormMol
            setInput={setInputs}
            show={true}
            onChangeValue={onChangeValue}
            name="userPwd"
            label="๋น๋ฐ๋ฒํธ"
            type="password"
            text="๋น๋ฐ๋ฒํธ๋ฅผ ์๋ ฅํด์ฃผ์ธ์"
            value={userPwd}
          />
        </div>
        <div className="btn" onClick={() => handleLogin()}>
          <BtnTmp size="lg" value="๋ก๊ทธ์ธ" status={next} />
        </div>
      </LoginFormTmpStyle>
    </>
  );
}

export default LoginFormTmp;
