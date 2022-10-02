import styled from "@emotion/styled";
import React, { useState } from "react";
import { color } from "../../styles/theme";

const BottomSheetRadioMolStyle = styled.div`
  > div {
    :first-of-type {
      border-bottom: 1px solid ${color.p_gray_lt};
      height: 42px;
      text-align: center;
      line-height: 42px;
      font-weight: 700;
      margin-bottom: 3px;
    }
    :last-of-type {
      display: flex;
      flex-direction: column;
    }
  }

  label {
    accent-color: ${color.p_pruple};
    line-height: 42px;
    font-weight: 650;
    margin: 3px 18px;
    border-bottom: 1px solid ${color.p_gray_lt};
    span {
      margin-left: 9px;
    }
  }

  :last-of-type {
    /* background-color: lightslategray; */
    margin-bottom: 12px;
  }
`;

const UniStarFilterMenu = ["전체", "1 Star", "2 Star", "3 Star"];

function BottomSheetRadioMol(props: { setOpen: Function }) {
  const { setOpen } = props;
  const [tempIdx, setTempIdx] = useState(0);

  const handleChangeIdx = (idx: number) => {
    setTempIdx(idx);
    setOpen(false);
  };

  return (
    <BottomSheetRadioMolStyle>
      <div>
        <h3>정렬</h3>
      </div>
      <div>
        {UniStarFilterMenu.map((menu, idx) => {
          return (
            <label
              key={idx}
              htmlFor={menu}
              onClick={() => handleChangeIdx(idx)}
            >
              <input
                type="radio"
                name={menu}
                value={menu}
                checked={tempIdx === idx ? true : false}
              />
              <span>{menu}</span>
            </label>
          );
        })}
      </div>
    </BottomSheetRadioMolStyle>
  );
}

export default BottomSheetRadioMol;
