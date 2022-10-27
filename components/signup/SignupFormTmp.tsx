import styled from "@emotion/styled";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { SignupFormRegexUtil } from "../../lib/utils/SignupFormRegexUtil";
import { SignupUtils } from "../../lib/utils/SignupUtils";
import { ToastUtils } from "../../lib/utils/ToastUtils";
import SignupFormAnimation from "../animation/SignupFormAnimation";
import InputFormMol from "../common/mol/InputFormMol";
import BtnTmp from "../common/tmp/BtnTmp";

const SignupFormTmpStyle = styled.div`
  .signupForm {
    margin-top: 18px;
    margin-bottom: 24px;
  }

  .signupBtn {
    bottom: 0;
    width: 100vw;
    margin-bottom: 12px;
  }
`;

function SignupFormTmp() {
  const router = useRouter();

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

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "authNum") {
      if (+e.target.value > 9999) {
        e.target.value = e.target.value.slice(0, 4);
      }
    }

    setSignupInput({
      ...signupInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleButtonClick = async (tempLevel: string) => {
    if (tempLevel === "email" && email !== "") {
      if (!SignupFormRegexUtil.emailRegex(email)) {
        ToastUtils.error("이메일을 정확히 입력해주세요 :(");
        return null;
      } else {
        const emailExistBool = await SignupUtils.checkOverlapEmail(email);

        if (!emailExistBool) {
          SignupUtils.sendAuthMail(email);
          SetSignUpStage((prev) => ({ ...prev, mailSend: true }));
          setTempLevel("authNum");
        } else {
          ToastUtils.error("중복되는 이메일입니다. 가입여부를 확인해주세요!");
        }
      }
    }

    if (tempLevel === "authNum" && authNum !== "") {
      console.log(1);
      if (await SignupUtils.checkAuthCode(email, +authNum)) {
        ToastUtils.success("인증번호가 확인되었습니다!");
        SetSignUpStage((prev) => ({ ...prev, mailAuth: true }));
        setTempLevel("userPwd");
      } else {
        ToastUtils.error("인증번호를 확인해주세요!");
      }
    }

    if (tempLevel === "userPwd" && userPwd !== "") {
      SetSignUpStage((prev) => ({ ...prev, userPwd: true }));
      setTempLevel("nickName");
    }

    if (tempLevel === "nickName" && nickName === "") {
      const randomNick = await SignupUtils.makeRandomNickName();
      setSignupInput((prev) => ({ ...prev, nickName: randomNick }));
      ToastUtils.success("닉네임이 자동생성 되었습니다 :>");
    }

    if (tempLevel === "nickName" && nickName !== "") {
      if (await SignupUtils.checkOverlapNickName(nickName)) {
        ToastUtils.error("중복되는 닉네임입니다 :(");
      } else {
        if (await SignupUtils.signupAccount(signupInput)) {
          router.replace("/redirect/signup");
        } else {
          ToastUtils.error(
            "회원가입에 실패하였습니다. 입력 정보를 다시한번 확인해주세요"
          );
        }
      }
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
