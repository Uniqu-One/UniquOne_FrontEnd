import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { OfferUtils } from "../../lib/utils/OfferUtils";
import { TokenState } from "../../states/recoil/TokenState";
import CornOfferSingleBoxOrg from "../corn/offer/CornOfferSingleBoxOrg";

const MyOfferListMolStyle = styled.div`
  padding-top: 50px;
`;

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
      {myOfferDataList ? (
        <MyOfferListMolStyle>
          <CornOfferSingleBoxOrg type="check" />
          <CornOfferSingleBoxOrg type="ok" />
          <CornOfferSingleBoxOrg type="no" />
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
