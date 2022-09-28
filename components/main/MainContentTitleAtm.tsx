import styled from '@emotion/styled'
import React from 'react'
import { color } from '../../styles/theme'

const MainContentTitleStyle = styled.h2`

  display: inline-block;
  padding: 9px 12px;
  background-color: ${color.p_pruple};
  color: white;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 6px;
`


function MainContentTitleAtm(props:{title:string}) {
  return (
    <MainContentTitleStyle>
      {props.title}
    </MainContentTitleStyle>
  )
}

export default MainContentTitleAtm