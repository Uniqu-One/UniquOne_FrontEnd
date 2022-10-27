import styled from "@emotion/styled";
import React from "react";
import CornOfferSingleBoxOrg from "../corn/offer/CornOfferSingleBoxOrg";

const MyOfferListMolStyle = styled.div`

padding-top: 50px;
`;

function MyOfferListMol() {
  return (
    <>
      <MyOfferListMolStyle>
        <CornOfferSingleBoxOrg type="check"/>
        <CornOfferSingleBoxOrg type="ok"/>
        <CornOfferSingleBoxOrg type="no"/>
      </MyOfferListMolStyle>
    </>
  );
}

export default MyOfferListMol;
