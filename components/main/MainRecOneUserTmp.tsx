import styled from '@emotion/styled'
import React from 'react'
import { color } from '../../styles/theme'
import PostLgOrg from '../common/org/PostLgOrg'
import MainRecOneUserMol from './MainRecOneUserMol'

const MainRecOneUserTmpStyle = styled.div`
    margin-top: 30px;

background-color: ${color.p_gray_lt};
padding: 18px 18px 18px 18px;


> div{
  :last-child{
    margin-top: 12px;
    display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  div{
    margin-bottom: 6px;
    margin-right: 6px;
  }
  }
  
}
`

function MainRecOneUserTmp() {
  return (
    <>
    <MainRecOneUserTmpStyle>
      <MainRecOneUserMol/>
      <div>
          <PostLgOrg />
          <PostLgOrg />
          <PostLgOrg />
          <PostLgOrg />
        </div>
    </MainRecOneUserTmpStyle>
    </>
  )
}

export default MainRecOneUserTmp