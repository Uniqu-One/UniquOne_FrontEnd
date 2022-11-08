import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { OfferUtils } from "../../lib/utils/OfferUtils";
import { TokenState } from "../../states/recoil/TokenState";
import { color } from "../../styles/theme";
import QuestionMarkAtm from "../common/atm/QuestionMarkAtm";
import CornOfferSingleBoxOrg from "../corn/offer/CornOfferSingleBoxOrg";

const MyOfferListMolStyle = styled.div`
  padding-top: 50px;
`;
const MyOfferListMolQStyle = styled.div`
  padding-top: 36vh;
  text-align: center;
  color: ${color.p_gray_md};
  svg{
    fill: ${color.p_gray_md};
    width: 72px;
    height: 72px;
  }
  p{
    margin-top: 9px;
  }
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

  console.log(myOfferDataList)

  return (
    <>
      {myOfferDataList ? (
        <MyOfferListMolStyle>
          {myOfferDataList.map((offer: offerDataType) => {
            return <CornOfferSingleBoxOrg key={offer.postId} offer={offer} />;
          })}
        </MyOfferListMolStyle>
      ) : (
        <MyOfferListMolQStyle>
          <div >
            <QuestionMarkAtm/>
            <p>내 오퍼 내역이 없습니다.</p>
          </div>
          </MyOfferListMolQStyle>
      )}
    </>
  );
}

export default MyOfferListMol;
