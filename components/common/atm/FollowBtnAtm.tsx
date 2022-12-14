import styled from '@emotion/styled'
import React from 'react'
import { color } from '../../../styles/theme'

const FollowBtnAtmStyle = styled.h3<{follow:boolean|null}>`
  box-sizing: border-box;
  background-color: ${(props) => props.follow ? color.p_gray_md : color.p_pruple}  ;
  text-align: center;
  padding: 9px 18px;
  font-size: 0.85rem;
  color: white;
  font-weight: 600;
  border-radius: 6px;
`

function FollowBtnAtm(props:{follow:boolean|null}) {

  return (
    <>
      <FollowBtnAtmStyle follow={props.follow}>
        {props.follow ? "팔로잉" : "팔로우"}
      </FollowBtnAtmStyle>
    </>
  )
}

export default FollowBtnAtm