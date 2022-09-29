import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { color, styleColor } from "../../../styles/theme";

/* ${styleColor.pink} */
const SmBtnAtmStyle = styled.div<{ color: string }>`
  display: inline-block;
  background-color: ${(props) => styleColor[props.color]};

  color: ${(props) => (props.color === "blue" ? "white" : color.p_gray_dk)};

  border: 1px solid ${color.p_gray_lt};

  padding: 9px 12px;
  font-size: 0.85rem;
  border-radius: 9px;
  
`;

function SmBtnAtm(props: { color: string }) {
    

  return <SmBtnAtmStyle color={props.color}>Color</SmBtnAtmStyle>;
}

export default SmBtnAtm;
