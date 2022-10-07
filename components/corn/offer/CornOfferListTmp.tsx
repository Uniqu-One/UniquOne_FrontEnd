import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import CornOfferListBoxMol from "./CornOfferListBoxMol";

const CornOfferListStyle = styled.div`
  div {
    margin-top: 12px;
  }
`;

function CornOfferList() {
  const OFFER_LIST = ["userId1", "userId2", "userId3"];

  return (
    <>
      <CornOfferListStyle>
        {OFFER_LIST.map((offer, idx) => {
          return (
            <Link href={`/corn/offer/${idx}`}>
              <a>
              <CornOfferListBoxMol key={offer} />
              </a>
              </Link>
          );
        })}
      </CornOfferListStyle>
    </>
  );
}

export default CornOfferList;
