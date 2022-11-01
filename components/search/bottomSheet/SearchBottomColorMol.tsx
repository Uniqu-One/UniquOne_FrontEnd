import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { POST_MENU_LIST } from "../../../public/assets/datas/postMenuList";
import { SearchFilterState } from "../../../states/recoil/SearchFilterState";
import { color } from "../../../styles/theme";
import BottomSheetColorAtm from "../../bottom_sheet/BottomSheetColorAtm";
import BottomSheetTopMol from "../../bottom_sheet/BottomSheetTopMol";

const SearchColorBottomMolStyle = styled.div`
  h4 {
    text-align: center;
    color: ${color.p_gray_md};
    font-size: 0.875rem;
    margin: 9px 0px;
  }
  .colorAtmStyle {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0px 18px;

    div {
      margin: 0px 6px;
    }
  }
`;

function SearchColorBottomMol(props: { setOpen: Function}) {
  const [tempSelect, setTempSelect] = useState<string[]>([]);

  const [searchFilterData, setSearchFilterData] = useRecoilState(SearchFilterState)


  useEffect(() => {
    if (searchFilterData["색상"].length > 0) {
      setTempSelect([...searchFilterData["색상"]]);
    }
  },[]);


  return (
    <>
      <SearchColorBottomMolStyle>
        <BottomSheetTopMol
          type="searchColor"
          setOpen={props.setOpen}
          tempSelect={tempSelect}
          setTempSelect={setTempSelect}
        />


        
        
        <div className="colorAtmStyle">
          {POST_MENU_LIST.color.map((menu) => {
            return <BottomSheetColorAtm key={menu.name} menu={menu} 
            setTempSelect={setTempSelect}
            tempSelect={tempSelect}
            />;
          })}
        </div>
      </SearchColorBottomMolStyle>
    </>
  );
}

export default SearchColorBottomMol;
