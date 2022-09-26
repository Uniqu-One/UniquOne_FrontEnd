import styled from '@emotion/styled'
import React from 'react'
import FooterIconMol from '../mol/FooterIconMol'
import FooterIconOrg from '../org/FooterIconOrg'

const FooterBox = styled.div`
  position: fixed;
  bottom: 0;

  width: 100vw;
  height: 54px;
  
  border-top: 0.5px solid gray;
`

function FooterTmp() {
  return (
    <FooterBox>
        <FooterIconOrg></FooterIconOrg>
    </FooterBox>
  )
}

export default FooterTmp