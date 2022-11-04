import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { color, styleColor } from "../../../styles/theme";

const SmBtnAtmStyle = styled.div<{ color: string }>`
  display: inline-block;

  background-color: ${(props) => styleColor[props.color]};

  color: ${(props) =>
    props.color === "핑크" ||
    props.color === "파랑" ||
    props.color === "블랙" ||
    props.color === "레드" ||
    props.color === "초록" ||
    props.color === "카키" ||
    props.color === "살구" ||
    props.color === "브라운" ||
    props.color === "네이비" ||
    props.color === "와인"
      ? color.p_gray_lt
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
