import styled from '@emotion/styled'
import React from 'react'
import useEvaIcon from '../../../lib/hooks/useEvaIcon'
import { color } from '../../../styles/theme'

const CornPostUploadPlusIconAtmStyle = styled.span`
`

function CornPostUploadPlusIconAtm() {

useEvaIcon()

  return (
    <CornPostUploadPlusIconAtmStyle className="plus">
    <i
      data-eva="plus-circle"
      data-eva-fill={color.p_pruple}
      data-eva-height="14px"
      data-eva-width="14px"
    ></i>
  </CornPostUploadPlusIconAtmStyle>
  )
}

export default CornPostUploadPlusIconAtm