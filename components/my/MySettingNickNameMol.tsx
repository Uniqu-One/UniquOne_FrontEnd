import styled from "@emotion/styled";
import React, { useState } from "react";
import InputFormMol from "../common/mol/InputFormMol";

const MySettingNickNameMolStyle = styled.div`
  padding-top: 50px;
`;

function MySettingNickNameMol() {
  
  const [nickName, setNickName] = useState('')

  const handleChangeNickName = () => {

  }
  
  return (
    <>
      <MySettingNickNameMolStyle>
        {/* @ts-ignore */}
        <InputFormMol label="닉네임" name="nickName" text="기존 닉네임"/>
      </MySettingNickNameMolStyle>
    </>
  );
}

export default MySettingNickNameMol;
