import styled from "@emotion/styled";
import { useRouter } from "next/router";
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
import CornPostUploadIconMol from "./CornPostUploadIconMol";

const CornPostTmpStyle = styled.div`
  margin: 0 18px;
  padding-top: 50px;
`;


function CornPostTmp(props:{postId?:string}) {

  const router = useRouter()
  const token = useRecoilValue(TokenState)
  const {postId} = props

  const [postData, setPostData] = useRecoilState(CornPostState);
  const [buttonStatus, setButtonStatus] = useState(false);

  const editPostData = PostUtils.getEditPostDatas(token,postId)
  


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
      <CornPostRegMol buttonStatus={buttonStatus} postId={postId}/>
    </>
  );
}

export default CornPostTmp;
