import styled from "@emotion/styled";
import React from "react";
import FooterTmp from "../../../components/common/tmp/FooterTmp";
import TopTmp from "../../../components/common/tmp/TopTmp";
import CornOfferList from "../../../components/corn/offer/CornOfferListTmp";

function OfferList() {
  return (
    <>
      <TopTmp text="오퍼" />
        <CornOfferList />
      <FooterTmp />
    </>
  );
}

export default OfferList;
