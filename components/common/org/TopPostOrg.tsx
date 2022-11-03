import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import useEvaIcon from "../../../lib/hooks/useEvaIcon";
import { SearchModalState } from "../../../states/recoil/SearchModalState";
import { color } from "../../../styles/theme";
import { TopPostMol } from "../mol/TopPostMol";

const TopPostStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;

  svg {
    fill: ${color.p_gray_dk};
  }

  .back {
    margin-left: 12px;
  }

  div {
    margin: auto 0;
    span {
      :first-of-type {
        margin-right: 6px;
      }
      :last-of-type {
        margin-right: 18px;
      }
    }
  }
`;

function TopPostOrg(props: { type?: string }) {
  const router = useRouter();
  const [modalState, setModalState] = useRecoilState(SearchModalState);
  useEvaIcon();

  return (
    <>
      <TopPostMol>
        <TopPostStyle>
          {props.type ? (
            <div className="back" onClick={() => router.back()}>
              <i data-eva="arrow-ios-back-outline"></i>
            </div>
          ) : (
            <div></div>
          )}

          <div>
            <span>
              <i data-eva="star-outline"></i>
            </span>
            <span onClick={() => setModalState(true)}>
              <i data-eva="search-outline"></i>
            </span>
          </div>
        </TopPostStyle>
      </TopPostMol>
    </>
  );
}

export default TopPostOrg;
