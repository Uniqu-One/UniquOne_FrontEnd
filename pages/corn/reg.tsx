import { useRouter } from "next/router";
import React from "react";
import { useRecoilValue } from "recoil";
import TopTmp from "../../components/common/tmp/TopTmp";
import CornRegTmp from "../../components/corn/reg/CornRegTmp";
import { ToastUtils } from "../../lib/utils/ToastUtils";
import { UserInfoState } from "../../states/recoil/UserInfoState";

function reg() {

  const cornId = useRecoilValue(UserInfoState).cornId
  const router = useRouter();

  if(cornId){
    
    ToastUtils.error('이미 개설한 콘이 존재합니다.')
    router.replace('/corn')
  }

  return (
    <>
      <TopTmp type="arrowText" text="Corn 등록" />
      <CornRegTmp/>
    </>
    
  );
}

export default reg;
