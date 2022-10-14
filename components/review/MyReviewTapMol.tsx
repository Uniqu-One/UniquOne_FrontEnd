import styled from "@emotion/styled";
import React from "react";
import { color } from "../../styles/theme";
import { motion } from "framer-motion";

const MyReviewTapMolStyle = styled.div`

padding-top: 50px;
  > div {
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
        color: ${color.p_gray_md};
        font-weight: 500;
      }
      .selected{
        color: black;
        font-weight: 650;
        }
      h4 {
        color: ${color.p_gray_md};
      }
    }
  }

  .underline {
  width: 80px;
  margin: 0 auto;
  height: 2px;
  background: ${color.p_pruple};
}
`;

function MyReviewTapMol(props: {
  tabs: string[];
  tempTab: number;
  setTempTab: Function;
  count?: number[];
}) {
  const { tabs, tempTab, setTempTab, count } = props;

  return (
    <>
      <MyReviewTapMolStyle>
        <div>
          {tabs.map((tab, idx) => (
            <div key={idx} onClick={() => setTempTab(idx)}>
              <h3 className={tempTab === idx ? "selected" : undefined}>
                {tab}
                {count !== undefined ? <span>(4)</span> : <></>}
                {tempTab === idx ? <motion.div className="underline" layoutId="line" /> : <></>}
              </h3>
            </div>
          ))}
        </div>
      </MyReviewTapMolStyle>
    </>
  );
}

export default MyReviewTapMol;
