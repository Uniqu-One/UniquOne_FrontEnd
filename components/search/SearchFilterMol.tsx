import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import { color } from "../../styles/theme";
import SearchBottomCategoryMol from "./bottomSheet/SearchBottomCategoryMol";
import SearchBottomColorMol from "./bottomSheet/SearchBottomColorMol";
import SearchBottomConditionMol from "./bottomSheet/SearchBottomConditionMol";
import SearchBottomLookMol from "./bottomSheet/SearchBottomLookMol";
import SearchFilterAtm from "./SearchFilterAtm";

const SearchFilterMolContainerStyle = styled.div`
  
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
}
`

const SearchFilterMolStyle = styled.div`
  background-color: white;
  height: 48px;
  display: flex;
  padding-left: 18px;
  min-width: 100%;
  width: max-content;

  border-bottom: 0.5px solid ${color.p_gray_md};
  > div {
    margin: auto 0;
    margin-right: 3px;
  }
`;

function SearchFilterMol(props: { tempMenu: string; setTempMenu: Function }) {
  const FILTER_MENU = ["색상", "룩", "카테고리"
  // , "상태"
];

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, []);

  const [tempMenu, setTempMenu] = useState("");

  const handleSetTempMenu = (menu: string) => {
    setTempMenu(menu);
    setOpen(true);
  };

  return (
    <>
      <SearchFilterMolContainerStyle>
        <SearchFilterMolStyle>
          {FILTER_MENU.map((filter, idx) => {
            return (
              <div onClick={() => handleSetTempMenu(filter)} key={idx}>
                <SearchFilterAtm filter={filter} />
              </div>
            );
          })}
        </SearchFilterMolStyle>
      </SearchFilterMolContainerStyle>

      <BottomSheet open={open} onDismiss={() => setOpen(false)}>
        {tempMenu === "색상" && <SearchBottomColorMol setOpen={setOpen} />}

        {tempMenu === "룩" && <SearchBottomLookMol setOpen={setOpen} />}

        {tempMenu === "카테고리" && (
          <SearchBottomCategoryMol setOpen={setOpen} tempMenu={"category"} />
        )}

        {tempMenu === "상태" && <SearchBottomConditionMol setOpen={setOpen} />}
      </BottomSheet>
    </>
  );
}

export default SearchFilterMol;
