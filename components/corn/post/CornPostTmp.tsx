import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import useEvaIcon from "../../../lib/hooks/useEvaIcon";
import ImgUploadIconAtm from "../../common/atm/ImgUploadIconAtm";
import BtnTmp from "../../common/tmp/BtnTmp";
import FooterTmp from "../../common/tmp/FooterTmp";
import CornPostDescInputMolStyle from "./CornPostDescInputMol";
import CornPostDetailsOrg from "./CornPostDetailsOrg";
import CornPostTagsInputMol from "./CornPostTagsInputMol";

export interface postDataType {
  [index:string]:string;
  desc: string;
  tags: string;
  type: string;
  category: string;
  condition: string;
  look: string;
  color: string;
}

const CornPostTmpStyle = styled.div`
  margin: 0 18px;
`;

//TODO - 리팩토링 시 context로 값 변경

function CornPostTmp() {
  const [postData, setPostData] = useState({
    desc: "",
    tags: "",
    type: "",
    category: "",
    condition: "",
    look: "",
    color: "",
  });

  const [buttonStatus, setButtonStatus] = useState(false)

  useEffect(() => {

    if(postData.type === "스타일"){
      setButtonStatus(true)
    } else {
      setButtonStatus(false)
    }

  },[postData])

  useEvaIcon();

  return (
    <>
      <CornPostTmpStyle>
        <div>
          <ImgUploadIconAtm />

          <div>여러분의 스타일 사진을 업로드해주세요!</div>
        </div>

        <CornPostDescInputMolStyle
          postData={postData}
          setPostData={setPostData}
        />
        <CornPostTagsInputMol postData={postData} setPostData={setPostData} />

        <CornPostDetailsOrg postData={postData} setPostData={setPostData} />
        
        
      </CornPostTmpStyle>

      <FooterTmp type="btn" text="스타일 업로드 하기" status={buttonStatus}/>
    </>
  );
}

export default CornPostTmp;
