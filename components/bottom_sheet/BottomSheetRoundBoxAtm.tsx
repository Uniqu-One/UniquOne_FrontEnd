import styled from '@emotion/styled'
import React from 'react'
import { color } from '../../styles/theme'

const BottomSheetRoundBoxAtmStyle = styled.div`
  height: 30px;
  line-height: 30px;
  border: 0.5px solid ${color.p_gray_md};
  color: ${color.p_gray_dk};
  font-weight: 500;
  display: inline-block;
  padding: 3px 12px;
  border-radius: 9px;
`

function BottomSheetRoundBoxAtm(props:{menu:string}) {
  return (
    <>
      <BottomSheetRoundBoxAtmStyle>
        <p>{props.menu}</p>
      </BottomSheetRoundBoxAtmStyle>

    </>
  )
}

export default BottomSheetRoundBoxAtm