import styled from "@emotion/styled";
import React from "react";
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

function CornOfferSingleSelectMol() {
  return (
    <>
      <CornOfferSingleSelectMolStyle>
        <div className="ok">
          <p>수락하기</p>
        </div>
        <div className="no">
          <p>거절하기</p>
        </div>
      </CornOfferSingleSelectMolStyle>
    </>
  );
}

export default CornOfferSingleSelectMol;
