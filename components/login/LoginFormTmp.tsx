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
        ToastUtils.toast('🦄 환영합니다 :>')
        router.replace({
          pathname: "/",
        });
      
      } else {
        ToastUtils.toast('로그인에 실패하였습니다. 정보를 확인해주세요!')
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
            label="이메일"
            type="text"
            text="이메일을 입력해주세요"
            value={email}
          />
        </div>
        <div className="input_form">
          <InputFormMol
            setInput={setInputs}
            show={true}
            onChangeValue={onChangeValue}
            name="userPwd"
            label="비밀번호"
            type="password"
            text="비밀번호를 입력해주세요"
            value={userPwd}
          />
        </div>
        <div className="btn" onClick={() => handleLogin()}>
          <BtnTmp size="lg" value="로그인" status={next} />
        </div>
      </LoginFormTmpStyle>
    </>
  );
}

export default LoginFormTmp;
