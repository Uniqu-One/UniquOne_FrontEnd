import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { OfferUtils } from "../../../lib/utils/OfferUtils";
import { TokenState } from "../../../states/recoil/TokenState";
import CornOfferListBoxMol from "./CornOfferListBoxMol";

export type CornOfferType = {
  acceptCount: number;
  postId: number;
  postImg: string;
  price: number;
  refuseCount: number;
  waitingCnt: number;
  offerId:string;
};

const CornOfferListStyle = styled.div`
  padding-top: 50px;
`;

function CornOfferList() {
  const token = useRecoilValue(TokenState).token;

  const [tempList, setTempList] = useState<CornOfferType[]>([]);

  const test = async () => {
    const data = await OfferUtils.getMyCornOfferList(token);
    setTempList(data);
  };

  useEffect(() => {
    test();
  }, []);

  console.log(tempList)

  if (!tempList) {
    return <div>나에게 온 오퍼가 없습니다.</div>;
  }

  return (
    <>
      <CornOfferListStyle>
        {tempList.map((offer, idx) => {
          console.log(offer)
          return <CornOfferListBoxMol key={offer.offerId} offer={offer} />;
        })}
      </CornOfferListStyle>
    </>
  );
}

export default CornOfferList;
