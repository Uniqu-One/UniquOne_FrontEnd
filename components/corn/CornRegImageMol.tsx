import { useRouter } from "next/router";
import React from "react";
import BtnTmp from "../common/tmp/BtnTmp";

function CornRegImageMol() {

  const router = useRouter()

  const handleRegCorn = () => {
    router.replace('/redirect/corn')
  }

  return (
    <div onClick={() => handleRegCorn()}>
      <BtnTmp size="default" value="콘 개설하기" />
    </div>
  );
}

export default CornRegImageMol;
