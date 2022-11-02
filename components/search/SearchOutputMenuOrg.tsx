import styled from "@emotion/styled";
import React, { useState } from "react";
import SearchFilterMol from "./SearchFilterMol";
import SearchOutputMenuTopMol from "./SearchOutputMenuTopMol";



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
    </>
  );
}

export default SearchOutputMenuOrg;
