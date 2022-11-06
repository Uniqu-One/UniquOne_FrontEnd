import styled from '@emotion/styled'
import React from 'react'
import BottomSheetRadioMol from '../bottom_sheet/BottomSheetRadioMol'

const MyUniStarFilterMolStyle = styled.div`

height: 500;
z-index: 1;

`

function MyUniStarFilterMol(props:{setOpen:Function, tempFilter: number; setTempFilter: Function}) {
  
  const { tempFilter, setTempFilter } = props;

  return (
    <MyUniStarFilterMolStyle>
      <BottomSheetRadioMol setOpen={props.setOpen} tempFilter={tempFilter} setTempFilter={setTempFilter}/>
    </MyUniStarFilterMolStyle>
  )
}

export default MyUniStarFilterMol