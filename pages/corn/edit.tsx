import React from "react";
import FooterTmp from "../../components/common/tmp/FooterTmp";
import TopTmp from "../../components/common/tmp/TopTmp";
import CornEditTmp from "../../components/corn/edit/CornEditTmp";

function Edit() {
  return (
    <>
    {/* TOP을 Tmp로 진행 - CSR */}
    <CornEditTmp/>
      <FooterTmp />
    </>
  );
}

export default Edit;
