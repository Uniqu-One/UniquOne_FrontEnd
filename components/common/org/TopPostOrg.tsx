import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React, { useState } from "react";
import useEvaIcon from "../../../lib/hooks/useEvaIcon";
import SearchModalTmp from "../../search/SearchModalTmp";
import { TopPostMol } from "../mol/TopPostMol";

const TopPostStyle = styled.div`
  display: flex;
  justify-content: right;
  
  span {
    margin: auto 0;
    :first-of-type {
      margin-right: 6px;
    }
    :last-of-type {
      margin-right: 18px;
    }
  }
`;

function TopPostOrg() {
  const router = useRouter()
  useEvaIcon();

  return (
    <>
      <TopPostMol>
        <TopPostStyle>
          <span>
            <i data-eva="star-outline"></i>
          </span>
          <span onClick={() => {router.push('/search')}}>
            <i data-eva="search-outline"></i>
          </span>
        </TopPostStyle>
      </TopPostMol>
    </>
  );
}

export default TopPostOrg;
