import React from "react";
import FooterTmp from "../../components/common/tmp/FooterTmp";
import TopTmp from "../../components/common/tmp/TopTmp";
import MySettingTmp from "../../components/my/MySettingTmp";

function settings() {
  return (
    <>
      <TopTmp type="setting" text="셋팅" />
      <MySettingTmp/>
      <FooterTmp />
    </>
  );
}

export default settings;
