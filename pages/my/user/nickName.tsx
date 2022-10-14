import React from "react";
import TopTmp from "../../../components/common/tmp/TopTmp";
import MySettingNickNameMol from "../../../components/my/MySettingNickNameMol";

function nickName() {
  return (
    <>
      <TopTmp type="edit" text="닉네임 변경" status={true} />
      <MySettingNickNameMol />
    </>
  );
}

export default nickName;
