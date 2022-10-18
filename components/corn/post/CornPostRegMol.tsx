import { useRouter } from "next/router";
import React from "react";
import { toast, Toaster } from "react-hot-toast";
import { useRecoilState, useRecoilValue } from "recoil";
import { PostUtils } from "../../../lib/utils/PostUtils";
import { CornPostState } from "../../../states/recoil/CornPostState";
import FooterTmp from "../../common/tmp/FooterTmp";

function CornPostRegMol(props: { buttonStatus: boolean }) {
  const router = useRouter();

  const postData = useRecoilValue(CornPostState);

  const handleRegisterPost = async () => {
    if (await PostUtils.registPost(postData)) {
      router.replace({
        pathname: "/corn",
        query: { status: "post" },
        //TODO - 포스트 내용으로 이동
      });
    } else {
      toast.error("포스트 등록에 실패하였습니다.");
    }
  };

  return (
    <div onClick={() => handleRegisterPost()}>
      <Toaster />
      <FooterTmp
        type="btn"
        text="스타일 업로드 하기"
        status={props.buttonStatus}
      />
    </div>
  );
}

export default CornPostRegMol;
