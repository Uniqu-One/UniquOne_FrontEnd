import styled from "@emotion/styled";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { SignupFormRegexUtil } from "../../lib/utils/SignupFormRegexUtil";
import { SignupUtils } from "../../lib/utils/SignupUtils";
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

  const router = useRouter()

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
      //이메일 예외처리
      if (!SignupFormRegexUtil.emailRegex(email)) {
        toast.error("이메일을 정확히 입력해주세요 :(");
        return null;
      } else {
        const emailExist = await axios
          .get(`${process.env.NEXT_PUBLIC_URL_AWS}/signup/${email}/exist`)
          .then((res) => {
            return res.data.existEmail;
          })
          .catch((err) => console.error(err));

        if (!emailExist) {
          SignupUtils.sendAuthMail(email);
          SetSignUpStage((prev) => ({ ...prev, mailSend: true }));
          setTempLevel("authNum");
        } else {
          toast.error("중복되는 이메일입니다. 가입여부를 확인해주세요!");
        }
      }
    }

    if (tempLevel === "authNum" && authNum !== "") {
      if (await SignupUtils.checkAuthCode(email, +authNum)) {
        SetSignUpStage((prev) => ({ ...prev, mailAuth: true }));
        setTempLevel("userPwd");
      } else {
        toast.error("인증번호를 확인해주세요!");
      }
    }

    if (tempLevel === "userPwd" && userPwd !== "") {
      // Aixos send AuthNum
      SetSignUpStage((prev) => ({ ...prev, userPwd: true }));
      setTempLevel("nickName");
    }

    if (tempLevel === "nickName" && nickName === "") {
      const randomNick = await SignupUtils.makeRandomWord();
      setSignupInput((prev) => ({ ...prev, nickName: randomNick }));
      toast.success('닉네임이 자동생성 되었습니다 :>')
    }

    if (tempLevel === "nickName" && nickName !== "") {

      if(await SignupUtils.checkNickName(nickName)){
        toast.error('중복되는 닉네임입니다 :(')
      } else {
        SignupUtils.signup(signupInput)
        router.push('/',{})
      }


    }
  };

  return (
    <>
      <Toaster />
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
