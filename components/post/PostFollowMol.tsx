import styled from '@emotion/styled'
import React from 'react'
import ThreeDotAtm from '../common/atm/ThreeDotAtm'
import FollowBtnMol from '../common/mol/FollowBtnMol'
import ThreeDotMol from '../common/mol/ThreeDotMol'

const PostFollowMolStyle = styled.div`
height: 54px;
/* background-color: lightblue; */
display: flex;
div {
  /* background-color: lightblue; */
  margin: auto 0;
  margin-left: 12px;
}
`

function PostFollowMol() {
  return (
    <PostFollowMolStyle>
      <FollowBtnMol/>
      <ThreeDotMol/>
    </PostFollowMolStyle>
  )
}

export default PostFollowMol