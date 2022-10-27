import styled from "@emotion/styled";
import React from "react";
import { color } from "../../styles/theme";

const MyOfferCheckingMolStyle = styled.div`
font-size: 0.875rem;
color: ${color.p_gray_md};
`;

function MyOfferCheckingMol() {
  return (
    <MyOfferCheckingMolStyle>
      <p>판매자가 오퍼를 확인중입니다.</p>
    </MyOfferCheckingMolStyle>
  );
}

export default MyOfferCheckingMol;
