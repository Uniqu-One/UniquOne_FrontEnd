import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { color, styleColor } from "../../../styles/theme";
import { COLOR_CODE_LIST } from "../../../public/assets/datas/colorCodeList";

/* ${styleColor.pink} */
const SmBtnAtmStyle = styled.div<{ color: string }>`
  display: inline-block;
  /* @type-ignore */
  background-color: ${(props) => COLOR_CODE_LIST[props.color]};

  color: ${(props) =>
    props.color === "핑크" || props.color === "파랑" || props.color === "블랙"
      ? "white"
      : color.p_gray_dk};

  border: 1px solid ${color.p_gray_lt};

  padding: 9px 12px;
  font-size: 0.85rem;
  border-radius: 9px;
`;

function SmBtnAtm(props: { color: string; text?: string }) {
  return <SmBtnAtmStyle color={props.color}>{props.text}</SmBtnAtmStyle>;
}

export default SmBtnAtm;
