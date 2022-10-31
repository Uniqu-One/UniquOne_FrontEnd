import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import useEvaIcon from "../../../lib/hooks/useEvaIcon";
import { SearchModalState } from "../../../states/recoil/SearchModalState";
import { TopPostMol } from "../mol/TopPostMol";

const TopPostStyle = styled.div`
  display: flex;
  justify-content: right;
  
  div{
    
    margin: auto 0;
  span {
    
    /* background-color: red; */
    :first-of-type {
      margin-right: 6px;
    }
    :last-of-type {
      margin-right: 18px;
    }
  }}
`;

function TopPostOrg() {
  const router = useRouter()
  const [modalState, setModalState] = useRecoilState(SearchModalState)
  useEvaIcon();

  return (
    <>
      <TopPostMol>
        <TopPostStyle>
<div>
    <i></i>
</div>
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
