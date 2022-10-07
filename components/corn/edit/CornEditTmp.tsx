import React, { useState } from "react";
import InputFormMol from "../../common/mol/InputFormMol";
import TopTmp from "../../common/tmp/TopTmp";
import CornImgChangeMol from "./CornImgChangeMol";

function CornEditTmp() {

  const [cornProfile, setCornProfile]= useState({
    img:"",
    cornName:"",
    link:"",
    desc:""
  })

  const {img, cornName, link, desc} = cornProfile

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCornProfile({
      ...cornProfile,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <TopTmp type="cornEdit" text="콘 수정" />
      

      <CornImgChangeMol/>


      <InputFormMol
        show={true}
        onChangeValue={onChangeValue}
        name="cornName"
        label="콘네임"
        type="text"
        text="cornName을 입력해주세요"
        value={cornName}
      />

<InputFormMol
        show={true}
        onChangeValue={onChangeValue}
        name="link"
        label="링크"
        type="text"
        text="링크를 입력해주세요"
        value={link}
      />

<InputFormMol
        show={true}
        onChangeValue={onChangeValue}
        name="desc"
        label="설명"
        type="text"
        text="설명을 입력해주세요"
        value={desc}
      />

    </>
  );
}

export default CornEditTmp;
