import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { CornUtils } from "../../../lib/utils/CornUtils";

import { GradiantBack } from "../../common/atm/GradiantBackAtm";
import CornMainDashBoxAtm from "./CornMainDashBoxAtm";

const CornMainDashMolStyle = styled(GradiantBack)`
  background: linear-gradient(
    60deg,
    #f832602f,
    #ff4e772f,
    #f310ff50,
    #6879ff2f,
    #ff7c9a2f
  );
  background-size: 800% 800%;

  -webkit-animation: AnimationName 12s ease infinite;
  -moz-animation: AnimationName 12s ease infinite;
  -o-animation: AnimationName 12s ease infinite;
  animation: AnimationName 12s ease infinite;

  height: 132px;
  border-radius: 0 0px 12px 12px;

  padding: 0px 18px;

  h2 {
    padding-top: 18px;
    color: white;
    font-size: 1.2rem;
    font-weight: 650;
  }
  > div {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
  }
`;

function CornMainDashMol() {

  const DASH_MENU = ["팔로우","좋아요","유니스타","오퍼"]


  return (
    <CornMainDashMolStyle>
      <h2>대시보드</h2>
      <div>
        {DASH_MENU.map(menu => {
          return <CornMainDashBoxAtm key={menu} title={menu}/>
        })}
        
      </div>
    </CornMainDashMolStyle>
  );
}

export default CornMainDashMol;
