import styled from "@emotion/styled";
import React from "react";
import useEvaIcon from "../../lib/hooks/useEvaIcon";
import { color } from "../../styles/theme";

const MyUniStarTmpStyle = styled.div`
  font-size: 0.875rem;
  height: 42px;
  display: flex;
  justify-content: right;
  line-height: 42px;
  div {
    color: ${color.p_gray_md};
    :last-of-type {
      transform: rotate(90deg);
      margin-right: 21px;
    }
  }
`;

function MyUniStarTmp() {
  useEvaIcon();


  
  return (
    <MyUniStarTmpStyle>
      
      <div>
        <p>추천순</p>
      </div>

      <div>
        <i
          data-eva="swap-outline"
          data-eva-fill={color.p_gray_md}
          data-eva-height={16}
          data-eva-width={16}
        ></i>
      </div>
    </MyUniStarTmpStyle>
  );
}

export default MyUniStarTmp;
