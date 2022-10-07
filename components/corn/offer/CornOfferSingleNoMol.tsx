import styled from '@emotion/styled'
import React from 'react'
import { color } from '../../../styles/theme'

const CornOfferNoMolStyle = styled.div`
  h4{
    color: ${color.p_red};
    font-size: 0.875rem;
    margin: auto 0;
  }
`

function CornOfferNoMol() {
  return (
    <CornOfferNoMolStyle>
      <h4>거절한 오퍼입니다.</h4>
    </CornOfferNoMolStyle>
  )
}

export default CornOfferNoMol