import React, { useState } from "react";
import InputFormMol from "../common/mol/InputFormMol";
import BtnTmp from "../common/tmp/BtnTmp";


function SignupFormTmp() {
  const [inputs, setInputs] = useState({
    email: "",
    authNum:"",
    userPwd:"",
    nickName:""
  });

  const [signUpStage, SetSignUpStage] = useState({
      mailSend: false,
      mailAuth: false,
      next: false,
      create: false,
      singup: false,
    });

  const { email, authNum, userPwd, nickName } = inputs;

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {

    //authNumCheck
    if(e.target.name === 'authNum'){
      if(+e.target.value > 99999){
        e.target.value = e.target.value.slice(0,6)
      }
    }

    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <> 
      <InputFormMol
        onChangeValue={onChangeValue}
        name="email"
        label="이메일"
        type="email"
        text="이메일을 입력해주세요"
        value={email}
      />


<InputFormMol
        onChangeValue={onChangeValue}
        name="authNum"
        label="인증번호"
        type="number"
        text="인증번호을 입력해주세요"
        value={authNum}
      />

<InputFormMol
        onChangeValue={onChangeValue}
        name="userPwd"
        label="비밀번호"
        type="password"
        text="비밀번호을 입력해주세요"
        value={userPwd}
      />

<InputFormMol
        onChangeValue={onChangeValue}
        name="nickName"
        label="닉네임"
        type="text"
        text="닉네임을 입력해주세요"
        value={nickName}
      />

      <BtnTmp size="lg" value="메일 보내기" />
    </>
  );
}

export default SignupFormTmp;
