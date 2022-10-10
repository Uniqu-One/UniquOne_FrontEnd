import React from "react";
import FooterTmp from "../../../components/common/tmp/FooterTmp";
import TopTmp from "../../../components/common/tmp/TopTmp";
import MyQnaSingleTmp from "../../../components/my/MyQnaSingleTmp";

function QnaId() {
  return (
    <>
      <TopTmp text="내 문의" />
        <MyQnaSingleTmp/>
      <FooterTmp />
    </>
  );
}

export default QnaId;
