import styled from "@emotion/styled";
import React from "react";

const SearchModalTmpStyle = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  z-index: 1000;
`;

function SearchModalTmp() {
  return (
    <SearchModalTmpStyle>
      <div>SearchModalTmp</div>
    </SearchModalTmpStyle>
  );
}

export default SearchModalTmp;
