import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import { useRecoilState } from "recoil";
import { SearchFilterState } from "../../states/recoil/SearchFilterState";
import { color } from "../../styles/theme";
import BottomSheetColorMol from "../bottom_sheet/BottomSheetColorMol";
import BottomSheetLookMol from "../bottom_sheet/BottomSheetLookMol";
import BottomSheetRadioMol from "../bottom_sheet/BottomSheetRadioMol";
import SearchBottomColorMol from "./bottomSheet/SearchBottomColorMol";
import SearchFilterAtm from "./SearchFilterAtm";

const SearchFilterMolStyle = styled.div`
  height: 48px;
  display: flex;
  padding-left: 18px;
  width: max-content;

  border-bottom: 0.5px solid ${color.p_gray_md};

  > div {
    margin: auto 0;
    margin-right: 3px;
  }
`;

function SearchFilterMol() {
  const FILTER_MENU = ["색상", "룩", "카테고리", "상태"];

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, []);

  //클릭된 필터 메뉴 찾기 및 오픈
  const [tempMenu, setTempMenu] = useState("");

  const handleSetTempMenu = (menu: string) => {
    setTempMenu(menu);
    setOpen(true);
  };

  return (
    <>
      <SearchFilterMolStyle>
        {FILTER_MENU.map((filter, idx) => {
          return (
            <div onClick={() => handleSetTempMenu(filter)} key={idx}>
              <SearchFilterAtm filter={filter} />
            </div>
          );
        })}
      </SearchFilterMolStyle>

      <BottomSheet open={open} onDismiss={() => setOpen(false)}>
        
        {tempMenu === "색상" && <SearchBottomColorMol setOpen={setOpen}/>}

        {tempMenu === "룩" && <div>룩</div>}
        
        {tempMenu === "카테고리" && <div>카테고리</div>}
        
        {tempMenu === "상태"}
        
      </BottomSheet>
    </>
  );
}

export default SearchFilterMol;
