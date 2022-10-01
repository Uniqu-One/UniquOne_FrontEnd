import styled from "@emotion/styled";
import React from "react";
import { color } from "../../styles/theme";

const MyReviewTapMolStyle = styled.div`
  div {
    height: 48px;
    display: flex;
    justify-content: center;
    line-height: 48px;
    border-bottom: 0.5px solid ${color.p_gray_md};

    div {
      width: calc((100vw - 6px) / 2);
      text-align: center;
      font-weight: 600;
      h3 {
        color: black;
        font-weight: 750;
        border-bottom: 3px solid ${color.p_pruple};
      }
      h4 {
        color: ${color.p_gray_md};
      }
    }
  }
`;

function MyReviewTapMol(props:{tabs:string[], tempTab:number, setTempTab:Function}) {
  
  const {tabs, tempTab, setTempTab} = props
  
  return (
    <>
    <MyReviewTapMolStyle>
      <div>
        {tabs.map((tab, idx) => (
          <div key={idx} onClick={() => setTempTab(idx)}>
            {tempTab === idx ? (
              <h3>
                {tab}
                <span>(4)</span>
              </h3>
            ) : (
              <h4>
                {tab}
                <span>(4)</span>
              </h4>
            )}
          </div>
        ))}
      </div>
      </MyReviewTapMolStyle>
    </>
  );
}

export default MyReviewTapMol;
