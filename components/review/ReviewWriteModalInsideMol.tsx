import styled from "@emotion/styled";
import React, { useState } from "react";
import UserImgAtm from "../common/atm/UserImgAtm";
import { Rating } from "react-simple-star-rating";
import { color } from "../../styles/theme";

const ReviewWriteModalInsideMolStyle = styled.div`
  padding-top: 60px;
  text-align: center;
`;

function ReviewWriteModalInsideMol(props: {
  setText: Function;
  setRating: Function;
  text: string;
  tempData:{}
}) {
  const { setText, text, setRating } = props;

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  return (
    <ReviewWriteModalInsideMolStyle>
      <UserImgAtm width={84} height={84} />
      <div>콘 네임</div>
      <Rating fillColor={color.p_pruple} size={30} onClick={handleRating} />
      <div>김 아무개님과의 거래는 어떠셨나요?</div>
      <div>거래한 경험을 알려주세요!</div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div>숫자</div>
      <div>리뷰는 공개적이며 변경되 수 없습니다.</div>
      <div>공정과 사실을확인한 후 리뷰를 등록해주세요.</div>
      <div>
        만약 거래에 문제가 있었을 경우, 리뷰를 남기기 전 문의를 진행해주세요.
      </div>
    </ReviewWriteModalInsideMolStyle>
  );
}

export default ReviewWriteModalInsideMol;
