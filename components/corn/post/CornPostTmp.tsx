import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import useEvaIcon from "../../../lib/hooks/useEvaIcon";
import { CornPostState } from "../../../states/recoil/CornPostState";
import ImgUploadIconAtm from "../../common/atm/ImgUploadIconAtm";
import FooterTmp from "../../common/tmp/FooterTmp";
import CornPostDescInputMolStyle from "./CornPostDescInputMol";
import CornPostDetailsOrg from "./CornPostDetailsOrg";
import CornPostTagsInputMol from "./CornPostTagsInputMol";
import CornPostUploadIconAtm from "./CornPostUploadIconOrg";
import CornPostUploadIconMol from "./CornPostUploadIconMol";
import { PostUtils } from "../../../lib/utils/PostUtils";
import CornPostRegMol from "./CornPostRegMol";

const CornPostTmpStyle = styled.div`
  margin: 0 18px;
  padding-top: 50px;
`;

//TODO - 리팩토링 시 context로 값 변경

function CornPostTmp() {
  const [postData, setPostData] = useRecoilState(CornPostState);
  const [buttonStatus, setButtonStatus] = useState(false);

  useEffect(() => {
    if (
      postData.type === "스타일" &&
      postData.desc !== "" &&
      postData.tags !== ""
    ) {
      setButtonStatus(true);
    } else if (PostUtils.canPostUpload(postData)) {
      setButtonStatus(true);
    } else {
      setButtonStatus(false);
    }
  }, [postData]);

  useEvaIcon();


  return (
    <>
      <CornPostTmpStyle>
        <CornPostUploadIconMol />

        <CornPostDescInputMolStyle />
        <CornPostTagsInputMol />
        <CornPostDetailsOrg />
      </CornPostTmpStyle>      
      <CornPostRegMol buttonStatus={buttonStatus}/>
    </>
  );
}

export default CornPostTmp;
