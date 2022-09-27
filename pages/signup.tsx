import React from 'react'
import InputFormMol from '../components/common/mol/InputFormMol'
import TopTmp from '../components/common/tmp/TopTmp'
import SignupFormTmp from '../components/signup/SignupFormTmp'
import SignupTitleSubAtm from '../components/signup/SignupTitleSubAtm'

function signup() {
  return (
  <>
    <TopTmp type="arrowText" text="회원 가입"/>
    <SignupTitleSubAtm/>
    <SignupFormTmp/>
    </>
  )
}

export default signup