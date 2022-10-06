import styled from "@emotion/styled";
import React from "react";
import useEvaIcon from "../../lib/hooks/useEvaIcon";
import { color } from "../../styles/theme";

const SearchRecentBoxAtmStyle = styled.div`
  color: ${color.p_gray_dk};
  height: 36px;
  line-height: 36px;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid ${color.p_gray_lt};
  p {
    font-size: 0.875rem;
  }

  .icon{
    svg{
      fill: ${color.p_gray_dk};
      height: 100%;
      margin: auto 0;
    }
    
  }
`;

function SearchRecentBoxAtm() {
  useEvaIcon();

  return (
    <SearchRecentBoxAtmStyle>
      <div>
        <p>마르지엘라 티셔츠</p>
      </div>
      <div className="icon">
        <i data-eva="close-outline"></i>
      </div>
    </SearchRecentBoxAtmStyle>
  );
}

export default SearchRecentBoxAtm;
