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
  tempMenu: string;
  setTempMenu: Function;
}) {

  const {tempMenu, setTempMenu} = props
  const menuList = props.menu

  const handleChangeTempMenu = (menu:string) => {
    setTempMenu(menu)
  }

  return (
    <SearchOutputMenuTopMolStyle>
      {props.menu.map((menu,idx) => {
        return (
          <div key={idx} onClick={()=>handleChangeTempMenu(menu)}>
            <SearchOutputMenuTopBtnAtm menu={menu} click={menuList[idx]===tempMenu}/>
          </div>
        );
      })}
    </SearchOutputMenuTopMolStyle>
  );
}

export default SearchOutputMenuTopMol;
