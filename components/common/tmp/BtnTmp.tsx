import styled from "@emotion/styled";
import React from "react";
import { color } from "../../../styles/theme";

const ButtonLgCommonStyle = styled.div`
  height: 42px;
  text-align: center;
  line-height: 42px;
  border-radius: 9px;
  font-weight: 700;
  margin: 0 18px;
`;

const ButtonLgStyle = styled(ButtonLgCommonStyle)<{ status?: string | boolean; color?: string }>`
  background-color: ${(props) =>
    props.status ? `${color.p_pruple}` : `${color.p_gray_lt}`};
  color: ${(props) => (props.status ? `white` : `${color.p_gray_dk}`)};
`;

const KaKaoButtonLgStyle = styled(ButtonLgCommonStyle)`
  background-color:#FAE64D;
  color: #381F1F;
`;

const NaverButtonLgStyle = styled(ButtonLgCommonStyle)`
background-color:#5AC466;
color: white;
`;

const GoogleButtonLgStyle = styled(ButtonLgCommonStyle)`
  background-color:white;
  color: #000000;
`;

function BtnTmp(props: {
  size: string;
  value?: string;
  status?: string | boolean;
}) {
  switch (props.size) {
    case "lg":
      return (
        <ButtonLgStyle status={props.status}>
          <p>{props.value}</p>
        </ButtonLgStyle>
      );

    case "kakao":
      return (
        <KaKaoButtonLgStyle color="kakao">
          <p>카카오톡으로 시작하기</p>
        </KaKaoButtonLgStyle>
      );

    case "naver":
      return (
        <NaverButtonLgStyle color="naver">
          <p>네이버계정으로 시작하기</p>
        </NaverButtonLgStyle>
      );

    case "google":
      return (
        <GoogleButtonLgStyle color="google">
          <p>구글계정으로 시작하기</p>
        </GoogleButtonLgStyle>
      );

    default:
      return (
        <ButtonLgStyle status={true}>
          <p>{props.value}</p>
        </ButtonLgStyle>
      );
  }
}

export default BtnTmp;
