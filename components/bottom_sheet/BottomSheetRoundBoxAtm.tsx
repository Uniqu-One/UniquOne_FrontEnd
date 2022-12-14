
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { CornPostState } from "../../states/recoil/CornPostState";
import { color } from "../../styles/theme";

const BottomSheetRoundBoxAtmStyle = styled.div<{ status: boolean }>`
  height: 30px;
  line-height: 30px;
  border: 0.5px solid ${color.p_gray_lt};
  color: ${(props) => (props.status ? "white" : color.p_gray_dk)};
  background-color: ${(props) => (props.status ? color.p_pruple : "white")};
  font-weight: 500;
  display: inline-block;
  padding: 3px 12px;
  border-radius: 9px;

`;

function BottomSheetRoundBoxAtm(props: {
  menu: string;
  setTempSelect: Function;
  tempSelect: string[];
}) {

  const [status, setStatus] = useState(false);
  const { setTempSelect, tempSelect, menu } = props;
  const handleCheckMenu = () => {

    setTempSelect((prev: string[]) => {
      if (prev.includes(menu)) {
        const idx = prev.indexOf(menu);

        if (tempSelect.length === 1) {
          return [];
        } else {
          return [...prev.slice(0,idx),...prev.slice(idx+1)]
        }

      } else {
        return [...prev, menu];
      }
    });
    setStatus(!status);
  };

  useEffect(() => {

    if(tempSelect.includes(menu)){
      setStatus(true)
    } else {
      setStatus(false)
    }

  },[tempSelect])

  return (
    <>
      <BottomSheetRoundBoxAtmStyle
        onClick={() => handleCheckMenu()}
        status={status}
      >
        <p>{props.menu}</p>
      </BottomSheetRoundBoxAtmStyle>
    </>
  );
}

export default BottomSheetRoundBoxAtm;
