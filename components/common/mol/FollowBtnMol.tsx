import React from "react";
import FollowBtnAtm from "../atm/FollowBtnAtm";

// TODO - 클릭했을때의 함수 여기서 만들어야함 + props로 어떤것 받아올지도 정하기

function FollowBtnMol(props: {
  followStatus: boolean;
  handleFollowStatus: Function;
}) {
  const { followStatus, handleFollowStatus } = props;

  return (
    <>
      <div onClick={() => handleFollowStatus()}>
        <FollowBtnAtm follow={followStatus} />
      </div>
    </>
  );
}

export default FollowBtnMol;
