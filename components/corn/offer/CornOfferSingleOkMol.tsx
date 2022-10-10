import styled from "@emotion/styled";
import React from "react";
import useEvaIcon from "../../../lib/hooks/useEvaIcon";
import { color } from "../../../styles/theme";

const CornOfferOkMolStyle = styled.div`
display: flex;
  h4 {
    color: ${color.p_green};
    font-size: 0.875rem;
    /* background-color: blue; */
    margin: auto 0;
  }
  svg{
    fill: ${color.p_gray_dk};
    margin-right: 3px;
    
  }
`;

function CornOfferOkMol() {
  useEvaIcon()
  return (
    <CornOfferOkMolStyle>
      <i data-eva="message-square-outline"></i>
      <h4>수락한 오퍼입니다.</h4>
    </CornOfferOkMolStyle>
  );
}

export default CornOfferOkMol;
