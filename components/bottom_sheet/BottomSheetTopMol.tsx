import styled from "@emotion/styled";
import React from "react";
import useEvaIcon from "../../lib/hooks/useEvaIcon";
import { color } from "../../styles/theme";

const BottomSheetTopMolStyle = styled.div`
  height: 48px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  line-height: 48px;
  /* background-color: red; */
  padding: 0px 18px;
  border-bottom: 0.5px solid ${color.p_gray_md};
  div{
    svg{
      margin: auto 0;
      height: 100%;
      /* background-color: lightblue; */
    }
    
  }
`

function BottomSheetTopMol(props:{type:string, setOpen:Function}) {

  useEvaIcon()

  return (
    <>
      <BottomSheetTopMolStyle>
        <div onClick={() => props.setOpen(false)}><i data-eva="arrow-ios-back-outline"></i></div>
        <div>{props.type === "look" ? "룩":"색상"}</div>
        <div><i data-eva="checkmark-outline"></i></div>
      </BottomSheetTopMolStyle>
    </>
  );
}

export default BottomSheetTopMol;
