import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";

import { useRecoilState } from "recoil";
import { POST_MENU_LIST } from "../../../public/assets/datas/postMenuList";

import { SearchFilterState } from "../../../states/recoil/SearchFilterState";
import { color } from "../../../styles/theme";
import BottomSheetRoundBoxAtm from "../../bottom_sheet/BottomSheetRoundBoxAtm";
import BottomSheetTopMol from "../../bottom_sheet/BottomSheetTopMol";

const LookStyle = styled.div`
  margin: 18px 18px 30px;

  h4 {
    text-align: center;
    color: ${color.p_gray_md};
    font-size: 0.875rem;
    margin: 9px 0px;
  }
  div {
    margin: 6px 6px;
  }
`;

function SearchBottomLookMol(props: { setOpen: Function }) {
  const [tempSelect, setTempSelect] = useState<string[]>([]);

  const [searchFilterData, setSearchFilterData] = useRecoilState(SearchFilterState)

  useEffect(() => {
    if (searchFilterData["룩"].length > 0) {
      setTempSelect([...searchFilterData["룩"]])
    }
  }, []);

  return (
    <>
      <BottomSheetTopMol
        type="searchLook"
        setOpen={props.setOpen}
        tempSelect={tempSelect}
        setTempSelect={setTempSelect}
      />
      <LookStyle>
        {POST_MENU_LIST.look.map((menu) => {
          return (
            <BottomSheetRoundBoxAtm
              key={menu}
              menu={menu}
              setTempSelect={setTempSelect}
              tempSelect={tempSelect}
            />
          );
        })}
      </LookStyle>
    </>
  );
}

export default SearchBottomLookMol;
