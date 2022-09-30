import React from "react";
import TopTmp from "../../components/common/tmp/TopTmp";
import CornRegTmp from "../../components/corn/CornRegTmp";
import SignupTitleSubAtm from "../../components/signup/SignupTitleSubAtm";

function reg() {
  return (
    <>
      <TopTmp type="arrowText" text="Corn 등록" />
      <CornRegTmp/>
    </>
    
  );
}

export default reg;
