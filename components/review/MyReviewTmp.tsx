import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { reviewListType, ReviewUtils } from "../../lib/utils/ReviewUtils";
import { TokenState } from "../../states/recoil/TokenState";
import { color } from "../../styles/theme";
import MyReviewTapMol from "./MyReviewTapMol";
import ReviewCardMol from "./ReviewCardMol";

function MyReviewTmp(props:{
  userId?:string
}) {
  const token = useRecoilValue(TokenState).token
  const tabs = ["나의 콘 리뷰", "작성한 리뷰"];
  const userId = props.userId
  const [tempTab, setTempTab] = useState(0);

  const cornReviewList = ReviewUtils.getMyCornReview(token);
  const writtenReviewList = ReviewUtils.getMyWrittenReview(token);
  const otherReviewList = ReviewUtils.getOtherReviewList(token,userId);

  return (
    <>
      {!userId ? (
        <MyReviewTapMol tabs={tabs} tempTab={tempTab} setTempTab={setTempTab} />
      ) : (
        <div style={{ paddingTop: "50px" }}></div>
      )}

      {tempTab === 0 &&
        !userId &&
        cornReviewList &&
        cornReviewList.map((review: reviewListType) => {
          return <ReviewCardMol key={review.reviewId} review={review} />;
        })}

      {tempTab === 1 &&
        !userId &&
        writtenReviewList &&
        writtenReviewList.map((review: reviewListType) => {
          return <ReviewCardMol key={review.reviewId} review={review} />;
        })}

      {userId &&
        otherReviewList &&
        writtenReviewList.map((review: reviewListType) => {
          return <ReviewCardMol key={review.reviewId} review={review} />;
        })}
    </>
  );
}

export default MyReviewTmp;
