import React, { useState } from "react";
import { ToastUtils } from "../../lib/utils/ToastUtils";
import FollowBtnMol from "../common/mol/FollowBtnMol";

function PostFollowMol() {
  const [followStatus, setFollowStatus] = useState(false);

  const handleFollowStatus = () => {
    if (followStatus) {
      ToastUtils.success("팔로잉에 성공하였습니다.");
    } else {
      ToastUtils.error("팔로잉을 취소하였습니다.");
    }

    setFollowStatus(!followStatus);
  };
  return (
    <>
      <FollowBtnMol
        followStatus={followStatus}
        handleFollowStatus={handleFollowStatus}
      />
    </>
  );
}

export default PostFollowMol;
