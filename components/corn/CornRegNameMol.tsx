import React, { ReactElement, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { makeNewWord } from "../../lib/utils/makeNewWord";
import InputFormMol from "../common/mol/InputFormMol";
import BtnTmp from "../common/tmp/BtnTmp";
import { CornInputTypes } from "./CornRegTmp";

function CornRegNameMol(props: CornInputTypes) {
  const { inputs, setInputs, onChangeValue,setCornPage } = props;

  const hanleMakeNewWord = () => {
    const notify = () => toast.success("아이디가 자동생성완료되었습니다!");
    notify();

    const newWords = makeNewWord();
    setInputs((prev: { cornName: string; cornDesc: string }) => {
      let newInputs = { ...prev };
      newInputs.cornName = newWords;
      return { ...newInputs };
    });
  };

  return (
    <>
      <InputFormMol
        show={true}
        onChangeValue={onChangeValue}
        name="cornName"
        type="text"
        text="Corn의 이름을 입력해주세요!"
        value={inputs.cornName}
      />
      {inputs.cornName ? (
        <div onClick={() => setCornPage("reg-2")}>
          <BtnTmp size="lg" value="다음" status={true} />
        </div>
      ) : (
        <div onClick={hanleMakeNewWord}>
          <BtnTmp size="lg" value="자동생성" status={true} />
        </div>
      )}
    </>
  );
}

export default CornRegNameMol;
