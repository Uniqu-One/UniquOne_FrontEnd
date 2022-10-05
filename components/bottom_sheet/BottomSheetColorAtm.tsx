import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { color } from "../../styles/theme";

const BottomSheetColorAtmStyle = styled.div<{ code: string,status: boolean }>`
  width: 72px;
  height: 84px;
  background-color: white;
  /* border: 1px solid black; */
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${color.p_gray_md};

  .colorChip {
    display: inline-block;
    background-color: ${(props) => props.code};
    width: 30px;
    height: 30px;
    border-radius: 100%;
    border: 3px solid ${color.p_gray_lt};
    opacity: ${(props) => props.status ? 100 : "10%"}
  }
  p {
    margin-top: 12px;
  }
`;

function BottomSheetColorAtm(props: {
  menu: { name: string; code: string };
  setTempSelect: Function;
  tempSelect: string[];
}) {
  const { name, code } = props.menu;

  const [status, setStatus] = useState(false);
  const { setTempSelect, tempSelect, menu } = props;
  const handleCheckMenu = () => {
    setTempSelect((prev: string[]) => {
      if (prev.includes(menu.name)) {
        const idx = prev.indexOf(menu.name);

        if (tempSelect.length === 1) {
          return [];
        } else {
          return [...prev.slice(0, idx), ...prev.slice(idx + 1)];
        }
      } else {
        return [...prev, menu.name];
      }
    });
    setStatus(!status);
  };

  useEffect(() => {
    if (tempSelect.includes(menu.name)) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, [tempSelect]);

  return (
    <BottomSheetColorAtmStyle code={code} onClick={()=>handleCheckMenu()} status={status}>
      <div>
        <div className="colorChip"></div>
        <p>{name}</p>
      </div>
    </BottomSheetColorAtmStyle>
  );
}

export default BottomSheetColorAtm;
