import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { useRecoilValue } from "recoil";
import { CornUtils } from "../../../lib/utils/CornUtils";
import { TokenState } from "../../../states/recoil/TokenState";
import { UserInfoState } from "../../../states/recoil/UserInfoState";
import BtnTmp from "../../common/tmp/BtnTmp";
import { ToastUtils } from "../../common/tmp/ToastTmp";

function CornRegImageMol(props: {
  inputs: { cornName: string; cornDesc: string };
  imgFile?: File;
}) {
  const token = useRecoilValue(TokenState).token
  const { cornName, cornDesc } = props.inputs;
  const imgfile = props.imgFile;

  const router = useRouter();

  const onSubmitReg = async () => {
    if (imgfile) {
      const formData = new FormData();
      formData.append("imgfile", imgfile);
      const cornData = {
        title: cornName,
        dsc: cornDesc,
      };

      const blob = new Blob([JSON.stringify(cornData)], {
        type: "application/json",
      });

      formData.append("cornCreateDto", blob);

      if(await CornUtils.postCornAccount(token,formData)){
        changeRegRedirectPage();
      } else {
        ToastUtils.error('콘 등록에 실패하였습니다.')
      }
    }
  };

  const changeRegRedirectPage = () => {
    router.replace("/redirect/corn");
  };

  return (
    <div onClick={() => onSubmitReg()}>
      <BtnTmp size="default" value="콘 개설하기" />
    </div>
  );
}

export default CornRegImageMol;
