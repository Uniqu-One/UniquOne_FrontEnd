import styled from "@emotion/styled";
import React from "react";
import SearchFilterMol from "./SearchFilterMol";
import SearchOutputMenuOrg from "./SearchOutputMenuOrg";

const SearchClickMenuMolStyle = styled.div`

padding-top: 46px;
position: fixed;
width: 100vw;
z-index: 6;


`;

function SearchClickMenuMol(props: {
  tempMenu: string;
  setTempMenu: Function;
}) {
  const { tempMenu, setTempMenu } = props;

  return (
    <SearchClickMenuMolStyle>
      <SearchOutputMenuOrg tempMenu={tempMenu} setTempMenu={setTempMenu} />
      {tempMenu ==="상품" && <SearchFilterMol tempMenu={tempMenu} setTempMenu={setTempMenu} />}
      
    </SearchClickMenuMolStyle>
  );
}

export default SearchClickMenuMol;
