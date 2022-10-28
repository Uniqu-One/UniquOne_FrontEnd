import styled from "@emotion/styled";
import React from "react";
import { useRecoilValue } from "recoil";
import { OfferUtils } from "../../../lib/utils/OfferUtils";
import { ToastUtils } from "../../../lib/utils/ToastUtils";
import { TokenState } from "../../../states/recoil/TokenState";
import { color } from "../../../styles/theme";

const CornOfferSingleSelectMolStyle = styled.div`
  display: flex;

  p {
    display: inline-block;
    padding: 12px 12px;
    border-radius: 9px;
    margin-left: 6px;
  }

  .ok {
    p {
      background-color: ${color.p_pruple};
      color: white;
    }
  }

  .no {
    p {
      border: 0.5px solid ${color.p_gray_md};
      color: ${color.p_gray_md};
    }
  }
`;

function CornOfferSingleSelectMol(props: { offerId: string | number }) {
  const token = useRecoilValue(TokenState).token;
  const { offerId } = props;

  const handleCheckAcceptCornOffer = async () => {
    if(await OfferUtils.checkCornOffer(token, offerId, "ACCEPT")){
      ToastUtils.success('오퍼 수락이 완료되었습니다.')
    }
  };

  const handleCheckRefuseCornOffer = async() => {
    if(await OfferUtils.checkCornOffer(token, offerId, "REFUSE")){
      ToastUtils.success('오퍼 거절이 완료되었습니다.')
    }
  };

  return (
    <>
      <CornOfferSingleSelectMolStyle>
        <div className="ok" onClick={() => handleCheckAcceptCornOffer()}>
          <p>수락하기</p>
        </div>

        <div className="no" onClick={() => handleCheckRefuseCornOffer()}>
          <p>거절하기</p>
        </div>
      </CornOfferSingleSelectMolStyle>
    </>
  );
}

export default CornOfferSingleSelectMol;
