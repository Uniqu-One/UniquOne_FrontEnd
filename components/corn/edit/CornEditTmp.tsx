import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { CornUtils } from "../../../lib/utils/CornUtils";
import { PostUtils } from "../../../lib/utils/PostUtils";
import { ToastUtils } from "../../../lib/utils/ToastUtils";
import { TokenState } from "../../../states/recoil/TokenState";

import InputFormMol from "../../common/mol/InputFormMol";
import TopTmp from "../../common/tmp/TopTmp";
import CornImgChangeMol from "./CornImgChangeMol";

export type cornEditDataType = {
  img: File | null;
  cornName: string;
  link: string;
  desc: string;
  imgUrl: string;
};

function CornEditTmp() {
  const token = useRecoilValue(TokenState).token
  const router = useRouter()
  const [cornProfile, setCornProfile] = useState<cornEditDataType>({
    img: null,
    cornName: "",
    link: "",
    desc: "",
    imgUrl: "",
  });

  const userData = CornUtils.getMyinfo(token);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCornProfile({
      ...cornProfile,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (userData !== "Loading") {
      setCornProfile((prev) => ({
        ...prev,
        img: null,
        imgUrl: userData.imgUrl,
        cornName: userData.title,
        desc: userData.dsc,
        link: userData.url,
      }));
    }
  }, [userData]);


  

  const handleEditCornInfo = async () => {
    if(await CornUtils.editMyCornInfo(token,cornProfile)){
      ToastUtils.success('콘 수정이 완료되었습니다.')
      router.replace('/corn')
    }
  }

  return (
    <>
      <TopTmp type="cornEdit" text="콘 수정" function_right={handleEditCornInfo}/>

      {userData === "Loading" && <div>Is Loading</div>}

      {userData === "Error" && <div>Is Error</div>}

      {userData !== "Loading" && userData !== "Error" && (
        <>
          <CornImgChangeMol
            cornImg={userData.imgUrl}
            setCornProfile={setCornProfile}
          />

          <InputFormMol
            show={true}
            onChangeValue={onChangeValue}
            name="cornName"
            label="콘네임"
            type="text"
            text="콘 이름을 입력해주세요"
            value={cornProfile.cornName}
          />

          <InputFormMol
            show={true}
            onChangeValue={onChangeValue}
            name="link"
            label="링크"
            type="text"
            text="링크를 입력해주세요"
            value={cornProfile.link}
          />

          <InputFormMol
            show={true}
            onChangeValue={onChangeValue}
            name="desc"
            label="설명"
            type="text"
            text="콘 설명을 입력해주세요"
            value={cornProfile.desc}
          />
        </>
      )}
    </>
  );
}

export default CornEditTmp;
