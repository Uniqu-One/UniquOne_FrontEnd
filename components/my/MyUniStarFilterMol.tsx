import styled from '@emotion/styled'
import React from 'react'
import BottomSheetRadioMol from '../bottom_sheet/BottomSheetRadioMol'

const MyUniStarFilterMolStyle = styled.div`

height: 500;
z-index: 1;

`

function MyUniStarFilterMol(props:{setOpen:Function}) {
  return (
    <MyUniStarFilterMolStyle>
      <BottomSheetRadioMol setOpen={props.setOpen}/>
    </MyUniStarFilterMolStyle>
  )
}

export default MyUniStarFilterMol