import styled from "@emotion/styled";
import React from "react";
import { color } from "../../../styles/theme";

const ImgUploadIconAtmStyle = styled.div`
  div {
    height: 54px;
    line-height: 68px;
    margin: auto !important;
    position: relative;

    span {


      :last-of-type {
        /* background-color: red; */
        position: absolute;
        height: 14px;
        width: 14px;
        left: -3px;
        top: -15px;
      }
    }
  }
`;

function ImgUploadIconAtm() {
  return (
    <ImgUploadIconAtmStyle>
      <div>
        <span className="camera">
          <i
            data-eva="camera-outline"
            data-eva-fill={color.p_gray_dk}
            data-eva-height="30px"
            data-eva-width="30px"
          ></i>
        </span>
        <span className="plus">
          <i
            data-eva="plus-circle"
            data-eva-fill={color.p_pruple}
            data-eva-height="14px"
            data-eva-width="14px"
          ></i>
        </span>
      </div>
    </ImgUploadIconAtmStyle>
  );
}

export default ImgUploadIconAtm;
