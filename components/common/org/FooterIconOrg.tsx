import styled from '@emotion/styled'
import React from 'react'
import FooterIconMol from '../mol/FooterIconMol'

const FooterMargin = styled.div`
  margin:auto 24px;
  height: 54px;
  display: flex;
  justify-content: space-between;
`

function FooterIconOrg() {
  return (
    <FooterMargin>
      <FooterIconMol></FooterIconMol>
    </FooterMargin>
  )
}

export default FooterIconOrg