import styled from "@emotion/styled";
import React, { useState } from "react";
import { reviewListType, ReviewUtils } from "../../lib/utils/ReviewUtils";
import { color } from "../../styles/theme";
import MyReviewTapMol from "./MyReviewTapMol";
import ReviewCardMol from "./ReviewCardMol";

function MyReviewTmp() {
  const tabs = ["나의 콘 리뷰", "작성한 리뷰"];
  const [tempTab, setTempTab] = useState(0);

  const cornReviewList = ReviewUtils.getCornReview();
  const writtenReviewList = ReviewUtils.getWrittenReview();

  return (
    <>
      <MyReviewTapMol tabs={tabs} tempTab={tempTab} setTempTab={setTempTab} />

      {tempTab === 0 &&
        cornReviewList &&
        cornReviewList.map((review: reviewListType) => {
          return <ReviewCardMol key={review.reviewId} review={review} />;
        })}

      {tempTab === 1 &&
        writtenReviewList &&
        writtenReviewList.map((review: reviewListType) => {
          return <ReviewCardMol key={review.reviewId} review={review} />;
        })}
    </>
  );
}

export default MyReviewTmp;
