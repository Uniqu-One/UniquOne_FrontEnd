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


const CornPostTmpStyle = styled.div`
  margin: 0 18px;
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
    } else {
      setButtonStatus(false);
    }
  }, [postData]);

  useEvaIcon();

  return (
    <>
      <CornPostTmpStyle>
        <div>
          <ImgUploadIconAtm />

          <div>여러분의 스타일 사진을 업로드해주세요!</div>
        </div>

        <CornPostDescInputMolStyle />
        <CornPostTagsInputMol />
      <CornPostDetailsOrg/>
      </CornPostTmpStyle>

      <FooterTmp type="btn" text="스타일 업로드 하기" status={buttonStatus} />
    </>
  );
}

export default CornPostTmp;
