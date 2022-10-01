import styled from "@emotion/styled";
import React, { useState } from "react";
import { color } from "../../styles/theme";
import MyReviewTapMol from "./MyReviewTapMol";
import ReviewCardMol from "./ReviewCardMol";

function MyReviewTmp() {
  const tabs = ["나의 콘 리뷰", "작성한 리뷰"];
  const [tempTab, setTempTab] = useState(0);

  return (
    <>
      <MyReviewTapMol tabs={tabs} tempTab={tempTab} setTempTab={setTempTab} />
      <ReviewCardMol />
    </>
  );
}

export default MyReviewTmp;
