import React, { useEffect, useState } from "react";
import { CornUtils } from "../../../lib/utils/CornUtils";

import InputFormMol from "../../common/mol/InputFormMol";
import TopTmp from "../../common/tmp/TopTmp";
import CornImgChangeMol from "./CornImgChangeMol";

export type cornEditData = {
  img: File | null;
  cornName: string;
  link: string;
  desc: string;
  imgUrl: string;
};

function CornEditTmp() {
  const [cornProfile, setCornProfile] = useState<cornEditData>({
    img: null,
    cornName: "",
    link: "",
    desc: "",
    imgUrl: "",
  });
  const { img, cornName, link, desc } = cornProfile;

  const userData = CornUtils.myinfo();

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


  return (
    <>
      <TopTmp type="cornEdit" text="콘 수정" />

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
            value={cornName}
          />

          <InputFormMol
            show={true}
            onChangeValue={onChangeValue}
            name="link"
            label="링크"
            type="text"
            text="링크를 입력해주세요"
            value={link}
          />

          <InputFormMol
            show={true}
            onChangeValue={onChangeValue}
            name="desc"
            label="설명"
            type="text"
            text="콘 설명을 입력해주세요"
            value={desc}
          />
        </>
      )}
    </>
  );
}

export default CornEditTmp;
