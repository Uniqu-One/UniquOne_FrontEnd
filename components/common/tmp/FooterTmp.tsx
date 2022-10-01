import styled from '@emotion/styled'
import React from 'react'
import FooterIconOrg from '../org/FooterIconOrg'

const FooterBox = styled.div`
  background-color: white;
  position: fixed;
  box-sizing: border-box;
  bottom: 0;
  padding-bottom:54px;
  width: 100vw;
  height: 54px;
  border-top: 0.5px solid ;
  z-index: 2;
`

function FooterTmp() {
  return (
    <FooterBox>
        <FooterIconOrg/>
    </FooterBox>
  )
}

export default FooterTmp