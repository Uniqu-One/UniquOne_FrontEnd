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

function LoginFindLink(props:{text:string, link:string}) {
  return (
    <Link href={props.link}>
    <LoginFindLinkStyle>
      <a>{props.text}</a>
    </LoginFindLinkStyle>
  </Link>
  )
}

export default LoginFindLink