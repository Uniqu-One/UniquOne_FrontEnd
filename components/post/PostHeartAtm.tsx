import React from 'react'
import useEvaIcon from '../../lib/hooks/useEvaIcon'
import { color } from '../../styles/theme'



function PostHeartAtm() {
  useEvaIcon()
  return (
    
    <i data-eva="heart-outline" data-eva-fill={color.p_gray_dk}></i>
  )
}

export default PostHeartAtm