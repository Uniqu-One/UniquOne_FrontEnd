import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import BtnTmp from "../../common/tmp/BtnTmp";
import SignupTitleSubAtm from "../../signup/SignupTitleSubAtm";
import CornRegDescMol from "./CornRegDescMol";
import CornRegImageMol from "./CornRegImageMol";
import CornRegNameMol from "./CornRegNameMol";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";

const CornRegTmpStyle = styled.div`
  overflow: hidden;
  div {
    :last-of-type {
      margin-top: 12px;
    }
    :nth-of-type(2) {
      margin-top: 18px;
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
  showSuccessToast?:Function
  showErrorToast?:Function
};

function CornRegTmp() {
  const [cornPage, setCornPage] = useState("reg-1");
  const [inputs, setInputs] = useState({ cornName: "", cornDesc: "" });
  const [imgFile, setImgFile] = useState<File>();

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const showErrorToast = (text: string) => {
    toast.error(text);
  };

  const showSuccessToast = (text: string) => {
    toast.error(text);
  };

  return (
    <>
      <Toaster />
      <AnimatePresence>
        <CornRegTmpStyle>
          {cornPage === "reg-1" && (
            <motion.div
              key="reg-1"
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
                showErrorToast={showErrorToast}
              />
            </motion.div>
          )}
          {cornPage === "reg-2" && (
            <motion.div
              key="reg-2"
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
          )}

          {cornPage === "reg-3" && (
            <motion.div
              key="reg-3"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <SignupTitleSubAtm type={cornPage} setImgFile={setImgFile} />
              <CornRegImageMol inputs={inputs} imgFile={imgFile} />
            </motion.div>
          )}
        </CornRegTmpStyle>
      </AnimatePresence>
    </>
  );
}

export default CornRegTmp;
