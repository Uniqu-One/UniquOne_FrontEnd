import styled from "@emotion/styled";
import React from "react";
import FooterTmp from "../../../components/common/tmp/FooterTmp";
import TopTmp from "../../../components/common/tmp/TopTmp";
import CornOfferList from "../../../components/corn/offer/CornOfferListTmp";

const OfferListStyle = styled.div`  
  margin-bottom: 54px;
`;

function OfferList() {
  return (
    <>
      <TopTmp text="오퍼" />
      <OfferListStyle>
        <CornOfferList />
      </OfferListStyle>
      <FooterTmp />
    </>
  );
}

export default OfferList;
