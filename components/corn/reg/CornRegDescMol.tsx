import React, { ReactElement, useState } from "react";
import InputFormMol from "../../common/mol/InputFormMol";
import BtnTmp from "../../common/tmp/BtnTmp";
import { CornInputTypes } from "./CornRegTmp";

function CornRegDescMol(props: CornInputTypes) {
  const { inputs, setInputs, onChangeValue,setCornPage } = props;
  

  return (

// TODO - text Area 처리
    <>
      <InputFormMol
        show={true}
        onChangeValue={onChangeValue}
        name="cornDesc"
        type="text"
        text="Corn의 설명을 입력해주세요!"
        value={inputs.cornDesc}
      />

        <div onClick={() => setCornPage("reg-3")}>
          <BtnTmp size="lg" value="다음" status={true} />
        </div>

    </>
  );
}

export default CornRegDescMol;
