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

  const handleEditPost = async () => {
    if (await PostUtils.editPostData(postData)) {
      toast.error("포스트 수정이 완료되었습니다.");

      router.replace({
        pathname: "/corn",
      });
    } else {
      toast.error("포스트 수정에 실패하였습니다.");
    }
  };

  if (postData.imgList[0] !== null) {
    return (
      <div onClick={() => handleEditPost()}>
        <Toaster />
        <FooterTmp
          type="btn"
          text="포스트 수정 하기"
          status={props.buttonStatus}
        />
      </div>
    );
  }

  return (
    <div onClick={() => handleRegisterPost()}>
      <Toaster />
      <FooterTmp
        type="btn"
        text="포스트 업로드 하기"
        status={props.buttonStatus}
      />
    </div>
  );
}

export default CornPostRegMol;
