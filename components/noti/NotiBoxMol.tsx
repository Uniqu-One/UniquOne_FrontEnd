import styled from '@emotion/styled'
import React from 'react'
import { color } from '../../styles/theme'


const NotiBoxMolStyle = styled.div`
  background-color: red;
  height: 90px;
  width: 100vw;
  border: 0.5px solid ${color.p_gray_lt};
`

function NotiBoxMol(props:{noti:{}}) {

  const noti = props.noti
  console.log(noti)

  return (
    <NotiBoxMolStyle>



    </NotiBoxMolStyle>
  )
}

export default NotiBoxMol