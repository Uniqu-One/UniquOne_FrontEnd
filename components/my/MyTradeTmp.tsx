import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { TradeUtils } from "../../lib/utils/TradeUtils";
import { TokenState } from "../../states/recoil/TokenState";
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
  const token = useRecoilValue(TokenState).token;
  const [tempTab, setTempTab] = useState(0);
  const tabs = ["구매내역", "판매내역"];

  const purchaseDatas = TradeUtils.getPurchaseList(token);
  const sellDatas = TradeUtils.getSellList(token);


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
