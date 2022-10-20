import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import useEvaIcon from "../../lib/hooks/useEvaIcon";
import { color } from "../../styles/theme";

const MyTradeBoxMolStyle = styled.div`
  padding: 12px 18px;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid ${color.p_gray_md};

  .left {
    display: flex;
  }

  .trade_img {
    border: 1px solid ${color.p_gray_md};
    border-radius: 6px;
  }

  .item_info {
    display: flex;
    /* background-color: red; */
    flex-direction: column;
    justify-content: space-between;
    padding: 3px 0;
    margin-left: 12px;
    font-weight: 500;
  }

  .btn{
    margin: auto 0;
    display: flex;
    background-color: ${color.p_pruple};
    height: 100%;
    padding: 6px 12px;
    border-radius: 9px;
    color: white;
    
    svg{
      padding-top: 2px;
      padding-left: 2px;
      fill: white;
      width: 20px;
      height: 20px;
      
    }
    div{
      margin: auto;
    }
  }
`;

function MyTradeBoxMol() {
  useEvaIcon()

  return (
    <>
      <MyTradeBoxMolStyle>
        <div className="left">
          <div className="trade_img">
            <Image src="" alt="더미 이미지" width={42} height={42}></Image>
          </div>
          <div className="item_info">
            <div>
              <h3>에스테특 골저러스 페브라스</h3>
            </div>
            <div>
              <h4>32,000원</h4>
            </div>
          </div>
        </div>

        <div className="btn">
          <div>리뷰쓰기</div>
          <div>
            <i data-eva="arrow-ios-forward-outline"></i>
          </div>
        </div>
      </MyTradeBoxMolStyle>
    </>
  );
}

export default MyTradeBoxMol;