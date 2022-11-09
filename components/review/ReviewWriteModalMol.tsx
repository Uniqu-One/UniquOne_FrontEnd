import styled from "@emotion/styled";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { ReviewUtils } from "../../lib/utils/ReviewUtils";
import { TokenState } from "../../states/recoil/TokenState";
import TopTmp from "../common/tmp/TopTmp";
import ReviewWriteModalInsideMol from "./ReviewWriteModalInsideMol";

const ReviewWriteModalMolStyle = styled.div`
  z-index: 30;
  height: 80vh;
`;

function ReviewWriteModalMol(props: {
  tempTradeId: string;
  postId: string;
  setReviewModal:Function
  data?:[]
  tempIdx?:number

}) {
  const token = useRecoilValue(TokenState).token;
  const [rating, setRating] = useState<number>(0);
  const [text, setText] = useState<string>("");

  const { tempTradeId, postId,setReviewModal, data,tempIdx } = props;


  const handlePostMyReview = async () => {
    if(await ReviewUtils.postReview(token, tempTradeId,postId, rating, text)){
      setReviewModal(false)
    } else {
      return ;
    }
  };

  return (
    <ReviewWriteModalMolStyle>
      <TopTmp type="edit" text="리뷰 쓰기" function={handlePostMyReview} />
      <ReviewWriteModalInsideMol
        setText={setText}
        text={text}
        setRating={setRating}
      />
    </ReviewWriteModalMolStyle>
  );
}

export default ReviewWriteModalMol;
