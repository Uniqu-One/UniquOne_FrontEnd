import styled from "@emotion/styled";
import React from "react";
import { TailSpin } from "react-loader-spinner";
import { color } from "../../../styles/theme";

const LoadingSpinnerAtmStyle = styled.div`
  height: 100vh;
  div {
    margin: auto;
    margin-top: 35vh;
    width: 80px;
  }
`;

function LoadingSpinnerAtm() {
  return (
    <>
      <LoadingSpinnerAtmStyle>
        <div>
          <TailSpin
            height="80"
            width="80"
            color={color.p_pruple}
            ariaLabel="tail-spin-loading"
            radius="1"
            visible={true}
          />
        </div>
      </LoadingSpinnerAtmStyle>
    </>
  );
}

export default LoadingSpinnerAtm;
