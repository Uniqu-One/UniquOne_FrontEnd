import React from "react";
import FooterTmp from "../../../components/common/tmp/FooterTmp";
import TopTmp from "../../../components/common/tmp/TopTmp";
import MyQnaMainTmp from "../../../components/my/MyQnaMainTmp";

function MyQna() {
  return (
    <>
      <TopTmp text="내 문의" />

      <MyQnaMainTmp />

      <FooterTmp />
    </>
  );
}

export default MyQna;
