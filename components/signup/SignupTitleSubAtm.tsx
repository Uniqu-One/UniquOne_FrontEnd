import styled from '@emotion/styled'
import React from 'react'
import { color } from '../../styles/theme'

const SignupTitleSubBox = styled.div`
  margin-left: 18px;
  margin-top: 24px;
  h2{
    margin-bottom: 12px;
  }
  p{
    margin-bottom: 3px;
  }
`

const SignupTitleStyle = styled.h2`
  font-size: 1rem;
  color: ${color.p_pruple};
  font-weight: 700;
`
const SignupSubeStyle = styled.p`
  font-size: 0.875rem;
  color: ${color.p_gray_dk};
  span{
    color: ${color.p_pruple};
  }
  

`



function SignupTitleSubAtm() {
  return (
    <>
      <SignupTitleSubBox>
        <SignupTitleStyle>이메일로 시작하기</SignupTitleStyle>
        <SignupSubeStyle>당신의 이메일은 무엇인가요?</SignupSubeStyle>
        <SignupSubeStyle><span>UniquOne</span>에서는 이메일이 곧 아이디입니다 :{')'}</SignupSubeStyle>
      </SignupTitleSubBox>
    </>
  )
}

export default SignupTitleSubAtm