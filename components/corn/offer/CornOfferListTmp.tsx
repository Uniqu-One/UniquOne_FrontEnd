import styled from "@emotion/styled";
import Link from "next/link";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { OfferUtils } from "../../../lib/utils/OfferUtils";
import { TokenState } from "../../../states/recoil/TokenState";
import CornOfferListBoxMol from "./CornOfferListBoxMol";

const CornOfferListStyle = styled.div`
padding-top: 50px;  
`;

function CornOfferList() {
  const token = useRecoilValue(TokenState).token

  const [offerList,setOfferList] = useState([]);

  const getMyCornOfferList = () => {
    OfferUtils.getMyCornOfferList(token)
  }

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
