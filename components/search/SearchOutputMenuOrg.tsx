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

function SearchOutputMenuOrg(props:{
  tempMenu:string,
  setTempMenu:Function
}) {
  const SEARCH_MENU = ["전체", "상품", "해시태그", "콘 유저"];

  const {tempMenu, setTempMenu} = props;

  return (
    <>
      <SearchOutputMenuTopMol
        menu={SEARCH_MENU}
        tempMenu={tempMenu}
        setTempMenu={setTempMenu}
      />
      <SearchOutputMenuOrgOverFlowStyle>
        {tempMenu === "상품" && <SearchFilterMol />}
      </SearchOutputMenuOrgOverFlowStyle>
    </>
  );
}

export default SearchOutputMenuOrg;
