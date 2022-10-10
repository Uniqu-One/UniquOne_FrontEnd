import styled from "@emotion/styled";
import React, { useState } from "react";
import SearchFilterMol from "./SearchFilterMol";
import SearchOutputMenuTopMol from "./SearchOutputMenuTopMol";

const SearchOutputMenuOrgOverFlowStyle = styled.div`

  overflow: scroll;
  ::-webkit-scrollbar{
    display: none;
  }
`;

function SearchOutputMenuOrg() {
  const SEARCH_MENU = ["전체", "상품", "해시태그", "스타일", "콘 유저"];

  const [tempMenu, setTempMenu] = useState(0);

  return (
    <>
      <SearchOutputMenuTopMol
        menu={SEARCH_MENU}
        tempMenu={tempMenu}
        setTempMenu={setTempMenu}
      />
      <SearchOutputMenuOrgOverFlowStyle>
        {tempMenu === 1 && <SearchFilterMol />}
      </SearchOutputMenuOrgOverFlowStyle>
    </>
  );
}

export default SearchOutputMenuOrg;
