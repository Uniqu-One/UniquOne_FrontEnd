import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";
import useEvaIcon from "../../lib/hooks/useEvaIcon";
import { color } from "../../styles/theme";
import { BottomSheet } from "react-spring-bottom-sheet";
import MyUniStarFilterMol from "./MyUniStarFilterMol";

const MyUniStarTmpStyle = styled.div`
  padding-top: 50px;
  font-size: 0.875rem;
  height: 42px;
  width: 100vw;
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

function MyUniStarTmp(props: { tempFilter: number; setTempFilter: Function }) {
  const { tempFilter, setTempFilter } = props;
  
  useEvaIcon();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <MyUniStarTmpStyle onClick={() => setOpen(true)}>
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

      <BottomSheet open={open} onDismiss={() => setOpen(false)}>
        <MyUniStarFilterMol setOpen={setOpen} tempFilter={tempFilter} setTempFilter={setTempFilter}/>
      </BottomSheet>
    </>
  );
}

export default MyUniStarTmp;
