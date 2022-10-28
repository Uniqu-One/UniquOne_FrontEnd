import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { OfferUtils } from "../../lib/utils/OfferUtils";
import { TokenState } from "../../states/recoil/TokenState";
import CornOfferSingleBoxOrg from "../corn/offer/CornOfferSingleBoxOrg";

const MyOfferListMolStyle = styled.div`
  padding-top: 50px;
`;

export type offerDataType = {
  postId: string | number;
  offerId: string | number;
  offerCheckDate: string;
  offerPrice: string | number;
  offerRegDate: string;
  offerType: string;
  postImg: string;
  postPrice: string | number;
  postTitle: string;
  cornImg: string;
  userNickName: string;
};

function MyOfferListMol() {
  const token = useRecoilValue(TokenState).token;
  const [myOfferDataList, setMyOfferDataList] = useState([]);

  const handleGetMyCornOfferList = async () => {
    setMyOfferDataList(await OfferUtils.getMySuggestOfferList(token));
  };

  useEffect(() => {
    handleGetMyCornOfferList();
  }, []);

  return (
    <>
      {myOfferDataList[0] ? (
        <MyOfferListMolStyle>
          {myOfferDataList.map((offer: offerDataType) => {
            return <CornOfferSingleBoxOrg key={offer.postId} offer={offer} />;
          })}
        </MyOfferListMolStyle>
      ) : (
        <>
          <div>오퍼 내역이 없습니다.</div>
          <div>오퍼 내역이 없습니다.</div>
          <div>오퍼 내역이 없습니다.</div>
          <div>오퍼 내역이 없습니다.</div>
          <div>오퍼 내역이 없습니다.</div>
          <div>오퍼 내역이 없습니다.</div>
          <div>오퍼 내역이 없습니다.</div>
        </>
      )}
    </>
  );
}

export default MyOfferListMol;
