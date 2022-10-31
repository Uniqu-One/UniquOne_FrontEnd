import styled from "@emotion/styled";
import React from "react";
import { useRecoilState } from "recoil";
import { SearchModalState } from "../../states/recoil/SearchModalState";
import SearchBarMol from "./SearchBarMol";
import SearchRecentMol from "./SearchRecentMol";

const SearchModalTmpStyle = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: white;
  z-index: 20;
  position: fixed;
`;

function SearchModalTmp() {
  const [modalState, setModalState] = useRecoilState(SearchModalState);


  if(modalState === false){return <></>}

  return (
    <SearchModalTmpStyle>
      <SearchBarMol/>
      <SearchRecentMol />
    </SearchModalTmpStyle>
  );
}

export default SearchModalTmp;
