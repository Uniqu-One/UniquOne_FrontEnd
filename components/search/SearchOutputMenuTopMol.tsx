import styled from "@emotion/styled";
import React from "react";
import { color } from "../../styles/theme";
import SearchOutputMenuTopBtnAtm from "./SearchOutputMenuTopBtnAtm";

const SearchOutputMenuTopMolStyle = styled.div`
  height: 54px;
  background-color: ${color.p_gray_lt};
  display: flex;
  padding-left: 18px;
  div{
    margin: auto 0;
    margin-right: 6px;
  }
`;
 
function SearchOutputMenuTopMol(props: {
  menu: string[];
  tempMenu: number;
  setTempMenu: Function;
}) {

  const {tempMenu, setTempMenu} = props

  const handleChangeTempMenu = (idx:number) => {
    setTempMenu(idx)
  }

  return (
    <SearchOutputMenuTopMolStyle>
      {props.menu.map((menu,idx) => {
        return (
          <div key={idx} onClick={()=>handleChangeTempMenu(idx)}>
            <SearchOutputMenuTopBtnAtm menu={menu} click={tempMenu===idx}/>
          </div>
        );
      })}
    </SearchOutputMenuTopMolStyle>
  );
}

export default SearchOutputMenuTopMol;
