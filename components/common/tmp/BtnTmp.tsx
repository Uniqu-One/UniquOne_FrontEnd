import styled from "@emotion/styled";
import React from "react";
import { color } from "../../../styles/theme";

const ButtonLgStyle = styled.div<{ status?: string | boolean }>`
  height: 42px;
  background-color: ${(props) =>
    props.status ? `${color.p_pruple}` : `${color.p_gray_lt}`};
  color: ${(props) => (props.status ? `white` : `${color.p_gray_dk}`)};
  text-align: center;
  line-height: 42px;
  border-radius: 9px;
  font-weight: 700;
  margin: 0 18px;
`;

function BtnTmp(props: {
  size: string;
  value: string;
  status: string | boolean;
}) {
  switch (props.size) {
    case "lg":
      return (
        <ButtonLgStyle status={props.status}>
          <p>{props.value}</p>
        </ButtonLgStyle>
      );

    default:
      return (
        <ButtonLgStyle>
          <p>hihi</p>
        </ButtonLgStyle>
      );
  }
}

export default BtnTmp;
