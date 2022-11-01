import styled from "@emotion/styled";
import React, { ReactElement, useEffect, useState } from "react";

import { useRecoilState } from "recoil";
import { POST_MENU_LIST } from "../../../public/assets/datas/postMenuList";

import { SearchFilterState } from "../../../states/recoil/SearchFilterState";
import { color } from "../../../styles/theme";
import BottomSheetRoundBoxAtm from "../../bottom_sheet/BottomSheetRoundBoxAtm";
import BottomSheetTopMol from "../../bottom_sheet/BottomSheetTopMol";

const BottomSheetRadioMolStyle = styled.div`
  h4 {
    text-align: center;
    color: ${color.p_gray_md};
    font-size: 0.875rem;
    margin: 9px 0px;
  }
  div {
    margin: 6px 6px;
  }

  label {
    accent-color: ${color.p_pruple};
    margin: 3px 18px;
    border-bottom: 1px solid ${color.p_gray_lt};

    display: flex;
    p {
      padding: 12px 0px;
      margin-left: 9px;
      display: flex;
      flex-direction: column;
      font-weight: 650;
    }
    span {
      margin-top: 6px;
      font-size: 0.8rem;
      color: ${color.p_gray_md};
      font-weight: 400;
    }
  }
`;

//TODO - 상태부분 checkbox 문제 해결해야함

function SearchBottomConditionMol(props: { setOpen: Function }) {
  const [tempCheck, setTempCheck] = useState<string[]>([]);

  const [searchFilterData, setSearchFilterData] =
    useRecoilState(SearchFilterState);

  const handleSetConditionData = (menu: string) => {
    if (tempCheck.includes(menu) === false) {
      setTempCheck([...tempCheck, menu]);
    } else {
      const index = tempCheck.indexOf(menu);

      const newCheck = [...tempCheck];
      setTempCheck([...newCheck.slice(0, index), ...newCheck.slice(index + 1)]);
    }
  };


  return (
    <>
      <BottomSheetTopMol
        type="searchCondition"
        setOpen={props.setOpen}
        tempSelect={tempCheck}
        setTempSelect={setSearchFilterData}
      />
      <BottomSheetRadioMolStyle>
        <div>
          {POST_MENU_LIST["condition"].map((menu, idx) => {
            return (
              <label
                key={idx}
                htmlFor={menu.title}
                onClick={() => handleSetConditionData(menu.title)}
              >
                <input
                  type="checkbox"
                  name={menu.title}
                  value={menu.title}
                  checked={searchFilterData.상태.includes(menu.title)}
                  readOnly
                />
                <p>
                  {menu.title}
                  <span>{menu.desc}</span>
                </p>
              </label>
            );
          })}
        </div>
      </BottomSheetRadioMolStyle>
    </>
  );
}

export default SearchBottomConditionMol;
