import styled from '@emotion/styled'
import React from 'react'
import FooterIconMol from '../mol/FooterIconMol'

const FooterMargin = styled.div`
  margin: auto 24px;
  div{
    height: 54px;
    display: flex;
    justify-content: space-between;
  }
`

function FooterIconOrg() {
  return (
    <>
    <FooterMargin>
      <FooterIconMol/>
    </FooterMargin>
    </>
  )
}

export default FooterIconOrg