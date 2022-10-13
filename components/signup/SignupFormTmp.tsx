import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { SignupFormRegexUtil } from "../../lib/utils/signupFormRegexUtil";
import SignupFormAnimation from "../animation/SignupFormAnimation";
import InputFormMol from "../common/mol/InputFormMol";
import BtnTmp from "../common/tmp/BtnTmp";

const SignupFormTmpStyle = styled.div`
  .signupForm {
    margin-top: 18px;
    margin-bottom: 24px;
  }

  .signupBtn {
    /* position: fixed; */
    bottom: 0;
    width: 100vw;
    margin-bottom: 12px;
  }
`;

function SignupFormTmp() {
  const [signupInput, setSignupInput] = useState({
    email: "",
    authNum: "",
    userPwd: "",
    nickName: "",
  });

  const [signUpStage, SetSignUpStage] = useState({
    mailSend: false,
    mailAuth: false,
    userPwd: false,
    create: false,
    signup: false,
  });

  const [tempLevel, setTempLevel] = useState("email");

  const { email, authNum, userPwd, nickName } = signupInput;

  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    //authNumCheck
    if (e.target.name === "authNum") {
      if (+e.target.value > 99999) {
        e.target.value = e.target.value.slice(0, 6);
      }
    }

    setSignupInput({
      ...signupInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleButtonClick = (tempLevel: string) => {
    if (tempLevel === "email" && email !== "") {
      //이메일 예외처리
      if (!SignupFormRegexUtil.emailAuth(email)) {
        return null;
      } else {
        // Aixos send Email

        SetSignUpStage((prev) => ({ ...prev, mailSend: true }));
        setTempLevel("authNum");
      }
    }

    if (tempLevel === "authNum" && authNum !== "") {
      // Aixos send AuthNum
      SetSignUpStage((prev) => ({ ...prev, mailAuth: true }));
      setTempLevel("userPwd");
    }

    if (tempLevel === "userPwd" && userPwd !== "") {
      // Aixos send AuthNum
      SetSignUpStage((prev) => ({ ...prev, userPwd: true }));
      setTempLevel("nickName");
    }
  };

  return (
    <>
      <SignupFormTmpStyle>
        <div className="signupForm">
          <AnimatePresence>
            {signUpStage.userPwd && (
              <SignupFormAnimation key={"nickName"}>
                <InputFormMol
                  key={"nickName"}
                  show={true}
                  onChangeValue={onChangeValue}
                  name="nickName"
                  label="닉네임"
                  type="text"
                  text="닉네임을 입력해주세요"
                  value={nickName}
                />
              </SignupFormAnimation>
            )}

            {signUpStage.mailAuth && (
              <SignupFormAnimation key={"userPwd"}>
                <InputFormMol
                  key={"userPwd"}
                  show={true}
                  onChangeValue={onChangeValue}
                  name="userPwd"
                  label="비밀번호"
                  type="password"
                  text="비밀번호을 입력해주세요"
                  value={userPwd}
                />
              </SignupFormAnimation>
            )}

            {signUpStage.mailSend && (
              <SignupFormAnimation key={"authNum"}>
                <InputFormMol
                  show={true}
                  onChangeValue={onChangeValue}
                  name="authNum"
                  label="인증번호"
                  type="number"
                  text="인증번호을 입력해주세요"
                  value={authNum}
                />
              </SignupFormAnimation>
            )}

            <InputFormMol
              show={true}
              onChangeValue={onChangeValue}
              name="email"
              label="이메일"
              type="email"
              text="이메일을 입력해주세요"
              value={email}
              handleButtonClick={handleButtonClick}
            />
          </AnimatePresence>
        </div>

        <div className="signupBtn" onClick={() => handleButtonClick(tempLevel)}>
          {tempLevel === "email" && (
            <BtnTmp
              size="lg"
              value="메일 보내기"
              status={email ? true : false}
            />
          )}

          {tempLevel === "authNum" && (
            <BtnTmp
              size="lg"
              value="인증번호 확인하기"
              status={authNum ? true : false}
            />
          )}

          {tempLevel === "userPwd" && (
            <BtnTmp size="lg" value="다음" status={userPwd ? true : false} />
          )}

          {tempLevel === "nickName" && (
            <BtnTmp
              size="lg"
              value={nickName ? "회원가입" : "자동생성"}
              status={true}
            />
          )}
        </div>
      </SignupFormTmpStyle>
    </>
  );
}

export default SignupFormTmp;
