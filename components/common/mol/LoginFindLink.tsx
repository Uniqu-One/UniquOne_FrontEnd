import styled from '@emotion/styled';
import Link from 'next/link'
import React from 'react'
import { color } from '../../../styles/theme';


export const LoginFindLinkStyle = styled.div`
  font-size: 0.75rem;
  text-align: center;
  width: 100vw;

  a {
    color: ${color.p_gray_md};
    text-decoration: underline;
  }
`;

function LoginFindLink() {
  return (
    <Link href={"/"}>
    <LoginFindLinkStyle>
      <a>혹시 비밀번호를 잊으셨나요?</a>
    </LoginFindLinkStyle>
  </Link>
  )
}

export default LoginFindLink