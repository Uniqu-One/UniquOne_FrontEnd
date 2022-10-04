import styled from '@emotion/styled'
import React from 'react'
import { color } from '../../../styles/theme'

const FollowBtnAtmStyle = styled.h3<{follow:boolean}>`
  box-sizing: border-box;
  background-color: ${(props) => props.follow ? color.p_gray_md : color.p_pruple}  ;
  /* width: 78px; */
  text-align: center;
  padding: 9px 18px;
  font-size: 0.875rem;
  color: white;
  font-weight: 550;
  border-radius: 6px;
`

function FollowBtnAtm(props:{follow:boolean}) {
  return (
    <>
      <FollowBtnAtmStyle follow={props.follow}>
        {props.follow ? "팔로잉" : "팔로우"}
      </FollowBtnAtmStyle>
    </>
  )
}

export default FollowBtnAtm