import styled from "@emotion/styled";
import React, { useState } from "react";
import { TradeUtils } from "../../lib/utils/TradeUtils";
import MyTradeBoxMol from "./MyTradeBoxMol";
import MyTradeSliderMol from "./MyTradeSliderMol";

const MyTradeTmpStyle = styled.div`
  padding: 50px 0px;
`;

export type purchaseDataType = {
  isReview: Boolean;
  postId: number;
  postImg: string;
  postTitle: string;
  price: number;
  regDate: string;
  tradeId: number;
};

function MyTradeTmp() {
  const [tempTab, setTempTab] = useState(0);
  const tabs = ["구매내역", "판매내역"];
  const purchaseDatas = TradeUtils.getPurchaseList();
  const sellDatas = TradeUtils.getSellList();

  console.log(sellDatas);
  return (
    <MyTradeTmpStyle>
      <MyTradeSliderMol tempTab={tempTab} setTempTab={setTempTab} tabs={tabs} />

      {tempTab === 0 &&
        purchaseDatas &&
        purchaseDatas.map((data: purchaseDataType) => {
          return <MyTradeBoxMol key={data.tradeId} data={data} />;
        })}

      {tempTab === 1 &&
        sellDatas &&
        sellDatas.map((data: purchaseDataType) => {
          return <MyTradeBoxMol key={data.tradeId} data={data} />;
        })}
        
    </MyTradeTmpStyle>
  );
}

export default MyTradeTmp;
