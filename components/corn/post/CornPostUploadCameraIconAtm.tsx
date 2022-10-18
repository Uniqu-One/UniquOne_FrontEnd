import styled from '@emotion/styled'
import React from 'react'
import useEvaIcon from '../../../lib/hooks/useEvaIcon'
import { color } from '../../../styles/theme'

const CornPostUploadCameraIconAtmStyle = styled.span`
`

function CornPostUploadCameraIconAtm() {
  useEvaIcon()
  return (
    <CornPostUploadCameraIconAtmStyle className="camera">
    <i
      data-eva="camera-outline"
      data-eva-fill={color.p_gray_dk}
      data-eva-height="30px"
      data-eva-width="30px"
    ></i>
  </CornPostUploadCameraIconAtmStyle>
  )
}

export default CornPostUploadCameraIconAtm