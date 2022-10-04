import styled from "@emotion/styled";
import React from "react";

const BottomSheetTopMolStyle = styled.div`
  height: 48px;
  background-color: white;
`

function BottomSheetTopMol(props:{type:string}) {
  return (
    <>
      <BottomSheetTopMolStyle>
        <div>{"<"}</div>
        <div>룩</div>
        <div>체크</div>
      </BottomSheetTopMolStyle>
    </>
  );
}

export default BottomSheetTopMol;
