import styled from "@emotion/styled";
import React, { useState } from "react";
import MyTradeBoxMol from "./MyTradeBoxMol";
import MyTradeSliderMol from "./MyTradeSliderMol";

const MyTradeTmpStyle = styled.div`
  padding: 50px 0px;
`;

function MyTradeTmp() {
  const [tempTab, setTempTab] = useState(0);

  const tabs = ["구매내역", "판매내역"];

  return (
    <MyTradeTmpStyle>
      <MyTradeSliderMol tempTab={tempTab} setTempTab={setTempTab} tabs={tabs}/>
      <MyTradeBoxMol />
    </MyTradeTmpStyle>
  );
}

export default MyTradeTmp;
