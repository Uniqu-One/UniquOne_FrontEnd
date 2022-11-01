import { GetServerSideProps } from "next";
import React from "react";
import FooterTmp from "../../../components/common/tmp/FooterTmp";
import TopTmp from "../../../components/common/tmp/TopTmp";
import MyReviewTmp from "../../../components/review/MyReviewTmp";

function reveiw(props: { userId: string }) {
  return (
    <>
      <TopTmp text="리뷰" />
      <MyReviewTmp userId={props.userId} />
      <FooterTmp />
    </>
  );
}

export default reveiw;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { userId } = query;

  return {
    props: {
      userId,
    },
  };
};
