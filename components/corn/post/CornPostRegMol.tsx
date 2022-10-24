import { useRouter } from "next/router";
import React from "react";
import { toast, Toaster } from "react-hot-toast";
import { useRecoilValue } from "recoil";
import { PostUtils } from "../../../lib/utils/PostUtils";
import { CornPostState } from "../../../states/recoil/CornPostState";
import { TokenState } from "../../../states/recoil/TokenState";
import FooterTmp from "../../common/tmp/FooterTmp";

function CornPostRegMol(props: { buttonStatus: boolean,postId?:string }) {
  const router = useRouter();
  const token = useRecoilValue(TokenState).token
  const postData = useRecoilValue(CornPostState);
  const {postId} = props

  const handleRegisterPost = async () => {
    if (await PostUtils.registerPost(token,postData)) {
      router.replace({
        pathname: "/corn",
        query: { status: "post" },
      });
    } else {
      toast.error("포스트 등록에 실패하였습니다.");
    }
  };

  const handleEditPost = async () => {
    if (await PostUtils.editPostData(token,postData,postId)) {
      toast.error("포스트 수정이 완료되었습니다.");

      router.replace({
        pathname: "/corn",
      });
    } else {
      toast.error("포스트 수정에 실패하였습니다.");
    }
  };

  if (router.query.postId !== undefined) {
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
