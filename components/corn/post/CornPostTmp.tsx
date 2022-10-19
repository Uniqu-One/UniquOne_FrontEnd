import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import useEvaIcon from "../../../lib/hooks/useEvaIcon";
import { PostUtils } from "../../../lib/utils/PostUtils";
import { CornPostState } from "../../../states/recoil/CornPostState";
import CornPostDescInputMolStyle from "./CornPostDescInputMol";
import CornPostDetailsOrg from "./CornPostDetailsOrg";
import CornPostRegMol from "./CornPostRegMol";
import CornPostTagsInputMol from "./CornPostTagsInputMol";
import CornPostUploadIconMol from "./CornPostUploadIconMol";

const CornPostTmpStyle = styled.div`
  margin: 0 18px;
  padding-top: 50px;
`;

//TODO - 리팩토링 시 context로 값 변경

function CornPostTmp() {

  const router = useRouter()

  const [postData, setPostData] = useRecoilState(CornPostState);
  const [buttonStatus, setButtonStatus] = useState(false);

  const editPostData = PostUtils.getEditPostDatas()

  useEffect(() => {

    if(router.query.postId && editPostData){
      setPostData({...editPostData})
    }
  },[router.query,editPostData])

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
      <CornPostRegMol buttonStatus={buttonStatus} />
    </>
  );
}

export default CornPostTmp;
