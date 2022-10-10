import styled from "@emotion/styled";
import React from "react";
import useEvaIcon from "../../lib/hooks/useEvaIcon";
import { color } from "../../styles/theme";

const SearchBarMolStyle = styled.div`
  padding: 0 18px;
  display: flex;
  justify-content: space-between;
  height: 48px;
  border-bottom: 0.5px solid ${color.p_gray_lt};
  fill: ${color.p_gray_dk};
  div {
    margin: auto 0;
  }

  input {
    height: 30px;
    background-color: ${color.p_gray_lt};
    border: none;
    border-radius: 12px;
    width: calc(100vw - 84px);
    padding-left: 12px;
  }

  .search_input {
    position: relative;
  }
  .search_icon {
    position: absolute;
    right: 6px;
    top: 6px;
    fill: ${color.p_gray_md};
  }
`;

function SearchBarMol() {
  useEvaIcon();
  return (
    <>
      <SearchBarMolStyle>
        <div>
          <i data-eva="close-outline"></i>
        </div>

        <div className="search_input">
          <input type="text" placeholder="검색어를 입력해주세요" />
          <i
            className="search_icon"
            data-eva="search-outline"
            data-eva-height="18px"
            data-eva-width="18px"
          ></i>
        </div>
      </SearchBarMolStyle>
    </>
  );
}

export default SearchBarMol;
