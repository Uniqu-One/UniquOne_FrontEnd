import styled from "@emotion/styled";
import React from "react";
import FooterTmp from "../../../components/common/tmp/FooterTmp";
import TopTmp from "../../../components/common/tmp/TopTmp";
import CornOfferListBoxMol from "../../../components/corn/offer/CornOfferListBoxMol";
import CornOfferSingleBoxOrg from "../../../components/corn/offer/CornOfferSingleBoxOrg";
import { color } from "../../../styles/theme";

const OfferIdStyle = styled.div`
  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: ${color.p_gray_dk};
    /* background-color: red; */
    margin: 18px 0px 18px 18px;
  }
`;

function OfferId() {
  return (
    <>
      <TopTmp text="오퍼" />
      <CornOfferListBoxMol />
      <OfferIdStyle>
        <h3>모든오퍼</h3>
        <CornOfferSingleBoxOrg type={"select"} />
        <CornOfferSingleBoxOrg type={"ok"} />
        <CornOfferSingleBoxOrg type={"no"} />
      </OfferIdStyle>
      <FooterTmp />
    </>
  );
}

export default OfferId;
