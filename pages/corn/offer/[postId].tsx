import styled from "@emotion/styled";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import { useRecoilValue } from "recoil";
import LoadingSpinnerAtm from "../../../components/common/atm/LoadingSpinnerAtm";
import FooterTmp from "../../../components/common/tmp/FooterTmp";
import TopTmp from "../../../components/common/tmp/TopTmp";
import CornOfferDetailTmp from "../../../components/corn/offer/CornOfferDetailTmp";
import CornOfferListBoxMol from "../../../components/corn/offer/CornOfferListBoxMol";
import CornOfferSingleBoxOrg from "../../../components/corn/offer/CornOfferSingleBoxOrg";
import { offerDataType } from "../../../components/my/MyOfferListMol";
import { CornUtils } from "../../../lib/utils/CornUtils";
import { OfferUtils } from "../../../lib/utils/OfferUtils";
import { TokenState } from "../../../states/recoil/TokenState";
import { color } from "../../../styles/theme";

const OfferIdStyle = styled.div`
  padding-top: 50px;
  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: ${color.p_gray_dk};
    /* background-color: red; */
    margin: 18px 0px 18px 18px;
  }
`;

function OfferId(props: { postId: string | number }) {
  const token = useRecoilValue(TokenState).token;
  const cornOfferDetailData = OfferUtils.getMyDetailOffer(token, props.postId);
  const offerList = cornOfferDetailData.offerDetailIndividualOutDtos;

  console.log(cornOfferDetailData);
  console.log(offerList);

  if (cornOfferDetailData === "Loading") {
    <LoadingSpinnerAtm />;
  }

  return (
    <>
      <TopTmp text="오퍼" />
      <div>''</div>
      {cornOfferDetailData === "Loading" && <LoadingSpinnerAtm />}
      {/* <CornOfferListBoxMol offer={cornOfferDetailData}/> */}
      <OfferIdStyle>
        <h3>모든오퍼</h3>
        {offerList &&
          offerList.map((offer: offerDataType) => {
            return <CornOfferSingleBoxOrg offer={offer} />;
          })}
      </OfferIdStyle>
      <FooterTmp />
    </>
  );
}

export default OfferId;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { postId } = query;

  return {
    props: {
      postId,
    },
  };
};
