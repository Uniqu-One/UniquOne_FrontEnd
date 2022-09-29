import styled from "@emotion/styled";
import React from "react";
import useEvaIcon from "../../../hooks/useEvaIcon";
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
  useEvaIcon();
  return (
    <TopPostMol>
      <TopPostStyle>
        <span>
          <i data-eva="star-outline"></i>
        </span>
        <span>
          <i data-eva="search-outline"></i>
        </span>
      </TopPostStyle>
    </TopPostMol>
  );
}

export default TopPostOrg;
