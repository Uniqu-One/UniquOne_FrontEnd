import { GetServerSideProps } from "next";
import React from "react";
import FooterTmp from "../../../components/common/tmp/FooterTmp";
import TopTmp from "../../../components/common/tmp/TopTmp";
import MyReviewTmp from "../../../components/review/MyReviewTmp";
import OtherReviewTmp from "../../../components/review/OtherReviewTmp";

function reveiw(props: { cornId: string }) {
  return (
    <>
      <TopTmp text="리뷰" />
        <OtherReviewTmp cornId={props.cornId} />
      <FooterTmp />
    </>
  );
}

export default reveiw;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { cornId } = query;

  return {
    props: {
      cornId,
    },
  };
};
