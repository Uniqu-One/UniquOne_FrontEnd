import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";
import useEvaIcon from "../../lib/hooks/useEvaIcon";
import { color } from "../../styles/theme";
import { BottomSheet } from "react-spring-bottom-sheet";
import MyUniStarFilterMol from "./MyUniStarFilterMol";


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

const ModalStyle = styled.div`
z-index: 1;
`

function MyUniStarTmp() {
  useEvaIcon();

  const [open, setOpen] = useState(false);

  // Ensure it animates in when loaded
  useEffect(() => {
    setOpen(false);
  }, []);

  function onDismiss() {
    setOpen(false);
  }

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
      
      <BottomSheet
        open={open}
        onDismiss={() => setOpen(false)}
        snapPoints={({ minHeight }) => 100}
      >
        <MyUniStarFilterMol/>
      </BottomSheet>
    </>
  );
}

export default MyUniStarTmp;
