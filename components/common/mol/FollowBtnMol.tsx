import React from "react";
import FollowBtnAtm from "../atm/FollowBtnAtm";

// TODO - 클릭했을때의 함수 여기서 만들어야함 + props로 어떤것 받아올지도 정하기

function FollowBtnMol() {
  return (
    <>
      <div>
        <FollowBtnAtm follow={false} />
      </div>
    </>
  );
}

export default FollowBtnMol;
