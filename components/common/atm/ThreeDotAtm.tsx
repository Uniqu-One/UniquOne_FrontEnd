import React from 'react'
import useEvaIcon from '../../../hooks/useEvaIcon'
import { color } from '../../../styles/theme'

function ThreeDotAtm() {
  useEvaIcon()
  return (
    <>
    <i data-eva="more-horizontal-outline" data-eva-fill={color.p_gray_dk}></i>
    </>
  )
}

export default ThreeDotAtm