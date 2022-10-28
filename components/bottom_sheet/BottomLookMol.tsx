import styled from '@emotion/styled'
import React from 'react'
import { color } from '../../styles/theme'
import { postMenuListData } from '../../public/assets/datas/postMenuListData'
import BottomSheetRoundBoxAtm from './BottomSheetRoundBoxAtm'
import BottomSheetTopMol from './BottomSheetTopMol'


const LookStyle = styled.div`
  margin: 18px 18px 30px;
  
  h4{
    text-align: center;
    color: ${color.p_gray_md};
    font-size: 0.875rem;
    margin: 9px 0px;
  }
  div{    
    margin: 6px 6px;
  }
  
`


function BottomLookMol(props:{setOpen:Function}) {
  return (
    <>
    <BottomSheetTopMol type={"look"} setOpen={props.setOpen} tempSelect={[]}/>
    <LookStyle>
      <h4>2개까지 선택 가능합니다.</h4>
    {postMenuListData.look.map((menu) => {
      return <BottomSheetRoundBoxAtm key={menu} menu={menu} tempSelect={[]} setTempSelect={()=>{}}/>
    })}
    </LookStyle>
    

    </>
  )
}

export default BottomLookMol