import styled from "@emotion/styled";
import React from "react";
import useEvaIcon from "../../lib/hooks/useEvaIcon";
import { color } from "../../styles/theme";

const SearchOutputCountSortMolStyle = styled.div`


  margin: 0px 18px;

  .sort {
    margin: 18px 0px;
    font-size: 0.875rem;
    color: ${color.p_gray_md};
    display: flex;
    justify-content: space-between;

    .icon {
      display: flex;
    }
    svg {
      transform: rotate(90deg);
    }
  }
`;

function SearchOutputCountSortMol() {
  
  useEvaIcon()

  return (
    <SearchOutputCountSortMolStyle>
        <div className="sort">
          <div>결과 247</div>
          <div className="icon">
            <p>추천순</p>
            <i
              data-eva="swap-outline"
              data-eva-fill={color.p_gray_md}
              data-eva-height={16}
              data-eva-width={16}
            ></i>
          </div>
        </div>
    </SearchOutputCountSortMolStyle>
  );
}

export default SearchOutputCountSortMol;
