import styled from "@emotion/styled";
import axios from "axios";
import React, { ReactElement, useState } from "react";
import { toast } from "react-hot-toast";
import { CornUtils } from "../../../lib/utils/CornUtils";
import { ToastUtils } from "../../../lib/utils/ToastUtils";
import InputFormMol from "../../common/mol/InputFormMol";
import BtnTmp from "../../common/tmp/BtnTmp";
import { CornInputTypes } from "./CornRegTmp";

function CornRegNameMol(props: CornInputTypes) {
  const { inputs, setInputs, onChangeValue, setCornPage } = props;

  const hanleMakeNewWord = async () => {
    ToastUtils.success("콘네임이 자동생성완료되었습니다!")

    const newWords = await CornUtils.getRandomCornName()
    setInputs((prev: { cornName: string; cornDesc: string }) => {
      let newInputs = { ...prev };
      newInputs.cornName = newWords;
      return { ...newInputs };
    });
  };

  const handleCheckCornName = () => {
    axios
      .post(`${process.env.NEXT_PUBLIC_URL_AWS}/posts/corns/existstitle`, {
        title: inputs.cornName,
      })
      .then((res) => {
        
        if (res.data.data.ExistsTitle === true) {
          setCornPage("reg-2");
          return true;
        } else {
          ToastUtils.error('중복된 콘 네임입니다.')
          return false;
        }
      })
      .catch((err) => {
        return false;
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
        <div onClick={() => handleCheckCornName()}>
          <BtnTmp size="lg" value="다음" status={true} />
        </div>
      ) : (
        <div onClick={() => hanleMakeNewWord()}>
          <BtnTmp size="lg" value="자동생성" status={true} />
        </div>
      )}
    </>
  );
}

export default CornRegNameMol;
