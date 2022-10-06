import styled from "@emotion/styled";
import React from "react";
import { color } from "../../styles/theme";

const SearchOutputMenuTopBtnAtmStyle = styled.div<{ click: Boolean }>`
  font-size: 0.875rem;
  margin: auto 0;
  margin-right: 12px;
  p {
    color: ${(props) => (props.click ? "white" : color.p_gray_dk)};
    padding: 9px 12px;
    background-color: ${(props) => (props.click ? color.p_pruple : "white")};
    border-radius: 9px;
  }
`;

function SearchOutputMenuTopBtnAtm(props: { menu: string; click: Boolean }) {
  const { click } = props;

  return (
    <SearchOutputMenuTopBtnAtmStyle click={click}>
      <p>{props.menu}</p>
    </SearchOutputMenuTopBtnAtmStyle>
  );
}

export default SearchOutputMenuTopBtnAtm;
