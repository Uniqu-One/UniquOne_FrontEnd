import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import useEvaIcon from "../../../lib/hooks/useEvaIcon";
import { PostUtils } from "../../../lib/utils/PostUtils";
import { CornPostState } from "../../../states/recoil/CornPostState";
import { TokenState } from "../../../states/recoil/TokenState";
import CornPostDescInputMolStyle from "./CornPostDescInputMol";
import CornPostDetailsOrg from "./CornPostDetailsOrg";
import CornPostRegMol from "./CornPostRegMol";
import CornPostTagsInputMol from "./CornPostTagsInputMol";
import CornPostTitleInputMol from "./CornPostTitleInputMol";
import CornPostUploadIconMol from "./CornPostUploadIconMol";

const CornPostTmpStyle = styled.div`
  margin: 0 18px;
  padding-top: 50px;
  padding-bottom: 60px;
`;

function CornPostTmp(props: { postId?: string }) {
  const token = useRecoilValue(TokenState).token;
  const { postId } = props;

  const [postData, setPostData] = useRecoilState(CornPostState);
  const [buttonStatus, setButtonStatus] = useState(false);

  const editPostData = PostUtils.getEditPostDatas(token,postId)

  useEffect(() => {
    if (postId && editPostData) {
      setPostData({ ...editPostData });
    }
  }, [editPostData]);

  useEffect(() => {
    if (
      postData.postType === "STYLE" &&
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
        <CornPostTitleInputMol />
        <CornPostDescInputMolStyle />
        <CornPostTagsInputMol />
        <CornPostDetailsOrg />
      </CornPostTmpStyle>

      <CornPostRegMol buttonStatus={buttonStatus} postId={postId} />
    </>
  );
}

export default CornPostTmp;
