import styled from "@emotion/styled";
import React from "react";
import FooterTmp from "../../components/common/tmp/FooterTmp";
import SearchBarMol from "../../components/search/SearchBarMol";
import SearchOutputTmp from "../../components/search/SearchOutputTmp";

const OutputStyle = styled.div`
  width: 100vw;
  overflow: hidden;
`;

function Output() {
  return (
    <>
      <OutputStyle>
        <SearchBarMol />

        <SearchOutputTmp />

        <FooterTmp />
      </OutputStyle>
    </>
  );
}

export default Output;
