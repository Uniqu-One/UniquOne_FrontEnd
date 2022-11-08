import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { reviewListType, ReviewUtils } from "../../lib/utils/ReviewUtils";
import { TokenState } from "../../states/recoil/TokenState";
import { color } from "../../styles/theme";
import MyReviewTapMol from "./MyReviewTapMol";
import ReviewCardMol from "./ReviewCardMol";

const OtherReviewTmpStyle = styled.div`
  padding-top: 50px;
  padding-bottom: 60px;
`;

function OtherReviewTmp(props: { cornId?: string }) {
  const token = useRecoilValue(TokenState).token;
  const cornId = props.cornId;
  const [tempTab, setTempTab] = useState(0);

  const cornReviewList = ReviewUtils.getOtherReviewList(cornId);


  return (
    <>
      <OtherReviewTmpStyle>
        {cornReviewList &&
          cornReviewList.map((review: reviewListType) => {
            return <ReviewCardMol review={review} />;
          })}
      </OtherReviewTmpStyle>
    </>
  );
}

export default OtherReviewTmp;
