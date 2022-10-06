import styled from "@emotion/styled";
import React from "react";
import { color } from "../../styles/theme";
import SearchRecentBoxAtm from "./SearchRecentBoxAtm";

const SearchRecentMolStyle = styled.div`
margin: 0 18px;
  .recent_top {
    height: 42px;
    line-height: 42px;
    display: flex;
    justify-content: space-between;

    h3{
      font-weight: 600;
    }
    p{
      font-size: 0.80rem;
      color: ${color.p_pruple};
    }
  }
`;

function SearchRecentMol() {
  return (
    <>
      <SearchRecentMolStyle>
        <div className="recent_top">
          <div>
            <h3>최근 검색한 키워드</h3>
          </div>
          <div>
            <p>모두 지우기</p>
          </div>
        </div>
        <div>
          <SearchRecentBoxAtm />
        </div>
      </SearchRecentMolStyle>
    </>
  );
}

export default SearchRecentMol;
