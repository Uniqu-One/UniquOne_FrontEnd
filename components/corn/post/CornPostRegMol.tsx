import React from "react";
import { useRecoilState } from "recoil";
import { PostUtils } from "../../../lib/utils/PostUtils";
import { CornPostState } from "../../../states/recoil/CornPostState";
import FooterTmp from "../../common/tmp/FooterTmp";

function CornPostRegMol(props: { buttonStatus: boolean }) {

  const [postData, setPostData] = useRecoilState(CornPostState);

  return (
    <div onClick={() => PostUtils.registPost(postData)}>
      <FooterTmp
        type="btn"
        text="스타일 업로드 하기"
        status={props.buttonStatus}
      />
    </div>
  );
}

export default CornPostRegMol;
