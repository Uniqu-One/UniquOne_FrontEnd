import React from "react";
import FooterTmp from "../../components/common/tmp/FooterTmp";
import TopTmp from "../../components/common/tmp/TopTmp";
import MyReviewTmp from "../../components/review/MyReviewTmp";
import ReviewCardMol from "../../components/review/ReviewCardMol";

function review() {
  return (
    <>
      <TopTmp text="마이 리뷰" />
        
      <MyReviewTmp/>

      <FooterTmp />
    </>
  );
}

export default review;
