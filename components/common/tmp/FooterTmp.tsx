import styled from "@emotion/styled";
import React from "react";
import { color } from "../../../styles/theme";
import FooterIconOrg from "../org/FooterIconOrg";
import BtnTmp from "./BtnTmp";

const FooterBox = styled.div`
  background-color: white;
  position: fixed;
  box-sizing: border-box;
  bottom: 0;
  padding-bottom: 54px;
  width: 100vw;
  height: 54px;
  border-top: 0.5px solid ${color.p_gray_md};
  z-index: 2;

  .footerBtn {
    /* background-color: red; */
    height: 54px;
    div {
      margin-top: 6px;
    }
  }
`;

function FooterTmp(props: { type?: string; text?: string; status?: boolean }) {
  if (props.type === "btn") {
    return (
      <>
      <FooterBox>
        <div className="footerBtn">
          <BtnTmp size="lg" value={props.text} status={props.status} />
        </div>
      </FooterBox>
      </>
    );
  } else {
    return (
      <>
      <FooterBox>
        <FooterIconOrg />
      </FooterBox>
      </>
    );
  }
}

export default FooterTmp;
