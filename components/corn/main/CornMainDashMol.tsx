import styled from "@emotion/styled";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { TokenState } from "../../../states/recoil/TokenState";

import { GradiantBack } from "../../common/atm/GradiantBackAtm";
import CornMainDashBoxAtm from "./CornMainDashBoxAtm";

const CornMainDashMolStyle = styled(GradiantBack)`
box-shadow: 0px 0px 11px 4px #e1e1e1;
-webkit-box-shadow: 0px 0px 11px 4px #e1e1e1;
-moz-box-shadow: 0px 0px 11px 4px #e1e1e1;

  background: linear-gradient(
    60deg,
    #f832606b,
    #ff4e7772,
    #f310ff72,
    #687aff62,
    #ff7c9b5b
  );
  background-size: 800% 800%;

  -webkit-animation: AnimationName 12s ease infinite;
  -moz-animation: AnimationName 12s ease infinite;
  -o-animation: AnimationName 12s ease infinite;
  animation: AnimationName 12s ease infinite;

  height: 136px;
  border-radius: 0 0px 12px 12px;

  padding: 0px 18px;

  h2 {
    display: inline-block;
    padding-top: 18px;
    color: white;
    font-size: 1.2rem;
    font-weight: 650;
  }

  h4{
    display: inline-block;
    padding-top: 18px;
    margin-left: 6px;
    color: white;
    font-size: 0.875rem;
  }
  > div {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
  }
`;

function CornMainDashMol() {

  const token = useRecoilValue(TokenState).token

  const [data,setData] = useState()

  const DASH_MENU = [["팔로우","countOfFollow"],["좋아요","countOfCool"],["유니스타","countOfUniStar"],["오퍼","countOfOffer"]]

  const getDashBoardData = () => {
    axios.get(`${process.env.NEXT_PUBLIC_URL_AWS}/corns/my/dashboard`,{
      headers:{
        Authorization:token
      }
    }) 
    .then(res => setData(res.data.data))
    .catch(err => console.error(err))
  }

  useEffect(() => {
    if(token){
      getDashBoardData()
    }

  },[])

  

  return (
    <CornMainDashMolStyle>
      
      <h2>대시보드</h2>
      <h4>이번주 내 콘 실적</h4>
      
      <div>
        {data !== undefined && DASH_MENU.map((menu,idx) => {
          const kai = (menu[1])
          return <CornMainDashBoxAtm key={menu[0]} title={menu[0]} value={data[kai]}/>
        })}
        
      </div>
    </CornMainDashMolStyle>
  );
}

export default CornMainDashMol;
