import React from "react";
import FooterTmp from "../components/common/tmp/FooterTmp";
import TopTmp from "../components/common/tmp/TopTmp";
import NotiTmp from "../components/noti/NotiTmp";

function noti() {
  return (
    <>
      <TopTmp text="알림"/>
        <NotiTmp/>
      <FooterTmp />
    </>
  );
}

export default noti;
