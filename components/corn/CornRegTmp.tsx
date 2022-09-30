import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import BtnTmp from "../common/tmp/BtnTmp";
import SignupTitleSubAtm from "../signup/SignupTitleSubAtm";
import CornRegDescMol from "./CornRegDescMol";
import CornRegImageMol from "./CornRegImageMol";
import CornRegNameMol from "./CornRegNameMol";

const CornRegTmpStyle = styled.div`
  div {
    :last-of-type {
      margin-top: 36px;
    }
  }
`;

export type CornInputTypes = {
  inputs: {
    cornName: string;
    cornDesc: string;
  };
  setInputs: Function;
  onChangeValue: Function;
  setCornPage: Function;
  cornPage: string;
};

function CornRegTmp() {
  const [cornPage, setCornPage] = useState("reg-1");
  const [inputs, setInputs] = useState({ cornName: "", cornDesc: "" });

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Toaster />
      <CornRegTmpStyle>
        {cornPage === "reg-1" && (
          <>
            <SignupTitleSubAtm type={cornPage} />
            <CornRegNameMol
              inputs={inputs}
              setInputs={setInputs}
              onChangeValue={onChangeValue}
              setCornPage={setCornPage}
              cornPage={cornPage}
            />
          </>
        )}
        {cornPage === "reg-2" && (
          <>
            <SignupTitleSubAtm type={cornPage} />
            <CornRegDescMol
              inputs={inputs}
              setInputs={setInputs}
              onChangeValue={onChangeValue}
              setCornPage={setCornPage}
              cornPage={cornPage}
            />
          </>
        )}

        {cornPage === "reg-3" && (
          <>
            <SignupTitleSubAtm type={cornPage} />
            <CornRegImageMol/>
          </>
        )}
      </CornRegTmpStyle>
    </>
  );
}

export default CornRegTmp;
