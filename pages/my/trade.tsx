import React from "react";
import FooterTmp from "../../components/common/tmp/FooterTmp";
import TopTmp from "../../components/common/tmp/TopTmp";
import MyTradeTmp from "../../components/my/MyTradeTmp";

function trade() {
  return (
    <>
      <TopTmp text="내 거래 내역" />
      <MyTradeTmp />
      <FooterTmp />
    </>
  );
}

export default trade;
