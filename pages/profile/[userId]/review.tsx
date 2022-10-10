import React from "react";
import FooterTmp from "../../../components/common/tmp/FooterTmp";
import TopTmp from "../../../components/common/tmp/TopTmp";
import MyReviewTmp from "../../../components/review/MyReviewTmp";

function reveiw() {
  return (
    <>
      <TopTmp text="리뷰" />

      <MyReviewTmp type="other"/>

      <FooterTmp />
    </>
  );
}

export default reveiw;
