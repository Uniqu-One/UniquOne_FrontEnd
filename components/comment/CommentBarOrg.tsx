import styled from "@emotion/styled";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { color } from "../../styles/theme";
import CommentInputMol from "./CommentInputMol";

const CommentBarOrgStyle = styled.div<{inputStatus:boolean}>`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 500;
  width: 100vw;
  height: 66px;
  background-color: white;
  display: flex;
  border-top: 0.5px solid ${color.p_gray_md};

  img {
    border-radius: 100%;
  }

  input {
    height: 42px;
    margin: 0;
    padding: 0;
  }
  padding: 0px 18px;

  div {
    margin: auto 0;
    :first-of-type {
      margin-right: 12px;
    }
    :last-of-type {
      position: relative;
      display: flex;
      // TODO - input box padding 조정 및 컬러 변경 공부
      input {
        width: calc(100vw - 96px);
        border: 0.5px solid ${color.p_gray_lt};
        border-radius: 9px;
      }
      p {
        position: absolute;
        line-height: 46px;
        font-size: 0.875rem;
        right: 12px;
        color: ${color.p_pruple};
        opacity: ${(props) => props.inputStatus ? "100%"  :  "30%"} 
      }
    }
  }
`;

function CommentBarOrg() {
  const [inputText, setInputText] = useState("");
  const [inputStatus, setInputStatus] = useState(false);

  useEffect(() => {
    if(inputText!==""){
      setInputStatus(true)
    } else {
      setInputStatus(false)
    }
  }, [inputText]);

  return (
    <CommentBarOrgStyle inputStatus={inputStatus}>
      <div>
        <Image
          src="/assets/images/dummyUserImg.jpg"
          alt="dummy user"
          width="42px"
          height="42px"
        />
      </div>
      <CommentInputMol inputText={inputText} setInputText={setInputText} />
    </CommentBarOrgStyle>
  );
}

export default CommentBarOrg;