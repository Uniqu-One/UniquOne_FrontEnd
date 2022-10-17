import styled from "@emotion/styled";
import React from "react";
import useEvaIcon from "../../../lib/hooks/useEvaIcon";
import { color } from "../../../styles/theme";

const ImgUploadIconAtmStyle = styled.div`
  
  padding-top: 12px;
  padding-bottom: 24px;

  .dot_box{
    margin: auto;
    /* background-color: blue; */
    border: 3px dashed ${color.p_gray_md};
    border-radius: 100%;
    width: 96px;
    height: 96px;
    display: flex;
    .icon{
      margin: auto;
      /* background-color: red; */
      width: 30px;
      height: 30px;
      /* margin-top: 24px; */
      position: relative;
    }
  }

    span {
      :last-of-type {
        position: absolute;
        height: 14px;
        width: 14px;
        left: -3px;
        top: 0px;
      
    }
  }
`;

function ImgUploadIconAtm() {
  useEvaIcon();
  return (
    <ImgUploadIconAtmStyle>
      <div className="dot_box">
        <div className="icon">
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
      </div>
    </ImgUploadIconAtmStyle>
  );
}

export default ImgUploadIconAtm;
