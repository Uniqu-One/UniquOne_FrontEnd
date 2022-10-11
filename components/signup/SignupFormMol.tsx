import { AnimatePresence } from 'framer-motion'
import React from 'react'
import SignupFormAnimation from '../animation/SignupFormAnimation'

function SignupFormMol() {
  return (
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
    />
  </AnimatePresence>
  )
}

export default SignupFormMol