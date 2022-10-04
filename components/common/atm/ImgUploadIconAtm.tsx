import styled from "@emotion/styled";
import React from "react";
import { color } from "../../../styles/theme";

const ImgUploadIconAtmStyle = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  border: 3px dashed ${color.p_gray_md};

  margin: 38px auto !important;
  text-align: center;
  div {
    height: 120px;
    line-height: 136px;
    margin: auto !important;
    position: relative;
    display: inline-block;

    span {
      :first-of-type {
      }
      :last-of-type {
        position: absolute;
        left: -3px;
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
