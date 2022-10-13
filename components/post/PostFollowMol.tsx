import styled from "@emotion/styled";
import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import ThreeDotAtm from "../common/atm/ThreeDotAtm";
import FollowBtnMol from "../common/mol/FollowBtnMol";
import ThreeDotMol from "../common/mol/ThreeDotMol";

const PostFollowMolStyle = styled.div`
  height: 54px;
  /* background-color: lightblue; */
  display: flex;
  div {
    margin: auto 0;
    margin-left: 12px;
  }
`;

function PostFollowMol() {
  const [followStatus, setFollowStatus] = useState(false);

  const successNotify = () => toast.success("팔로우 성공");
  const failNotify = () => toast.error("팔로우 끊기");

  const handleFollowStatus = () => {
    if (followStatus) {
      failNotify();
    } else {
      successNotify();
    }

    setFollowStatus(!followStatus);
  };

  return (
    <>
      <Toaster />
      <PostFollowMolStyle>
        <FollowBtnMol
          followStatus={followStatus}
          handleFollowStatus={handleFollowStatus}
        />
        <ThreeDotMol />
      </PostFollowMolStyle>
    </>
  );
}

export default PostFollowMol;
