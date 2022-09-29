import styled from '@emotion/styled'
import React from 'react'
import ThreeDotAtm from '../atm/ThreeDotAtm'

const ThreeDotMolStyle = styled.div`
  position: fix;
`

function ThreeDotMol() {
  return (
    <ThreeDotMolStyle>
      <ThreeDotAtm/>
    </ThreeDotMolStyle>
  )
}

export default ThreeDotMol