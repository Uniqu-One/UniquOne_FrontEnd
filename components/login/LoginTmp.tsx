import styled from "@emotion/styled";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { color } from "../../styles/theme";
import InputFormMol from "../common/mol/InputFormMol";
import BtnTmp from "../common/tmp/BtnTmp";



function LoginTmp() {
  const [inputs, setInputs] = useState({
    email: "",
    userPwd: "",
  });
  const [next, setNext] = useState(false)

  const { email, userPwd } = inputs;

  useEffect(() => {
    if(inputs.email!=="" && inputs.userPwd!==""){
      setNext(true)
    } else {
      setNext(false)
    }
  },[inputs])

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          type="text"
          text="이메일을 입력해주세요"
          value={email}
        />
        <InputFormMol
          onChangeValue={onChangeValue}
          name="userPwd"
          label="비밀번호"
          type="password"
          text="비밀번호를 입력해주세요"
          value={userPwd}
        />
      <BtnTmp size="lg" value="로그인" status={next} />
    </>
  );
}

export default LoginTmp;
