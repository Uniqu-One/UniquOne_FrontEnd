import React from 'react'
import useEvaIcon from '../../hooks/useEvaIcon'
import { color } from '../../styles/theme'

function PostCommentAtm() {
  useEvaIcon()
  return (
    <i data-eva="message-square-outline" data-eva-fill={color.p_gray_dk}></i>
  )
}

export default PostCommentAtm