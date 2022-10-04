import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import BtnTmp from "../../common/tmp/BtnTmp";
import SignupTitleSubAtm from "../../signup/SignupTitleSubAtm";
import CornRegDescMol from "./CornRegDescMol";
import CornRegImageMol from "./CornRegImageMol";
import CornRegNameMol from "./CornRegNameMol";
import { AnimatePresence, motion } from "framer-motion";

const CornRegTmpStyle = styled.div`
  overflow: hidden;
  div {
    :last-of-type {
      margin-top: 36px;
    }
  }
`;

//TODO - 애니메이션 조금 더 자연스럽게 진행하기

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
      <AnimatePresence>
        <Toaster />
        <CornRegTmpStyle>
          {cornPage === "reg-1" && (
            <>
              <motion.div
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.35 }}
              >
                <SignupTitleSubAtm type={cornPage} />
                <CornRegNameMol
                  inputs={inputs}
                  setInputs={setInputs}
                  onChangeValue={onChangeValue}
                  setCornPage={setCornPage}
                  cornPage={cornPage}
                />
              </motion.div>
            </>
          )}
          {cornPage === "reg-2" && (
            <>
              <motion.div
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.35 }}
              >
                <SignupTitleSubAtm type={cornPage} />
                <CornRegDescMol
                  inputs={inputs}
                  setInputs={setInputs}
                  onChangeValue={onChangeValue}
                  setCornPage={setCornPage}
                  cornPage={cornPage}
                />
              </motion.div>
            </>
          )}

          {cornPage === "reg-3" && (
            <>
              <motion.div
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.35 }}
              >
                <SignupTitleSubAtm type={cornPage} />
                <CornRegImageMol />
              </motion.div>
            </>
          )}
        </CornRegTmpStyle>
      </AnimatePresence>
    </>
  );
}

export default CornRegTmp;
