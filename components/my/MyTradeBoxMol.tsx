import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import useEvaIcon from "../../lib/hooks/useEvaIcon";
import { color } from "../../styles/theme";
import TradeArrowIcon from "../common/atm/TradeArrowIcon";
import TradeCheckIcon from "../common/atm/TradeCheckIcon";
import { purchaseDataType } from "./MyTradeTmp";

const MyTradeBoxMolStyle = styled.div`
  padding: 12px 18px;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid ${color.p_gray_md};

  .left {
    display: flex;
  }

  .trade_img {
    img {
      border-radius: 6px;
      border: 1px solid ${color.p_gray_lt};
    }
  }

  .item_info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3px 0;
    margin-left: 12px;
    font-weight: 500;

    color: ${color.p_gray_dk};
    font-size: 0.875rem;

    h3 {
      margin-bottom: 6px;
    }
  }

  .btn {
    margin: auto 0;
    display: flex;
    background-color: ${color.p_pruple};
    height: 100%;
    padding: 6px 12px;
    border-radius: 9px;
    color: white;
    font-size: 0.875rem;

    svg {
      padding-top: 2px;
      padding-left: 2px;
      fill: white;
      width: 20px;
      height: 20px;
    }
    div {
      margin: auto;
    }
  }
  .btnx{
    margin: auto 0;
    display: flex;
    background-color: ${color.p_gray_md};
    height: 100%;
    padding: 6px 12px;
    border-radius: 9px;
    color: white;
    font-size: 0.875rem;

    svg {
      padding-top: 2px;
      padding-left: 2px;
      fill: white;
      width: 20px;
      height: 20px;
    }
    div {
      margin: auto;
    }
  }
`;

function MyTradeBoxMol(props: {
  data: purchaseDataType;
  setReviewModal: Function;
  setTempTradeId: Function;
  setPostId: Function;
  type: string;
  setTempIdx: Function;
  idx: number;
}) {
  useEvaIcon();
  const { postImg, postTitle, price, tradeId, postId, isReview } = props.data;
  const { setReviewModal, setTempTradeId, setPostId, type, setTempIdx, idx } =
    props;

  const [tempReview, setTempReview] = useState(false);

  useEffect(() => {
    //@ts-ignore
    setTempReview(isReview);
  }, []);

  return (
    <>
      <MyTradeBoxMolStyle>
        <div className="left">
          <div className="trade_img">
            <img src={postImg} alt="더미 이미지" width="42px" height="42px" />
          </div>
          <div className="item_info">
            <div>
              <h3>{postTitle}</h3>
            </div>
            <div>
              <h4>{price.toLocaleString()}원</h4>
            </div>
          </div>
        </div>

        {type === "buy" &&
          (tempReview ? (
            <div
              className="btnx"
            >
              <div className="can">작성완료</div>
              <div>
                <TradeCheckIcon/>
              </div>
            </div>
          ) : (
            <div
              className="btn"
              onClick={() => {
                setReviewModal(true);
                setTempTradeId(tradeId);
                setPostId(postId);
                setTempIdx(idx);
              }}
            >
              <div className="can">리뷰쓰기</div>
              <div>
                <TradeArrowIcon/>
              </div>
            </div>
          ))}
      </MyTradeBoxMolStyle>
    </>
  );
}

export default MyTradeBoxMol;
