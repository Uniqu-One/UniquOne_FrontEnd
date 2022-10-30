import React from "react";
import { useRecoilValue } from "recoil";
import { SearchUtils } from "../../lib/utils/SearchUtils";
import { TokenState } from "../../states/recoil/TokenState";
import SearchBarMol from "./SearchBarMol";
import SearchRecentMol from "./SearchRecentMol";

function SearchModalTmp() {

  const token = useRecoilValue(TokenState).token

  // SearchUtils.getSearchAllList(
  //   token,
  //   "유니콘",
  //   "1",
  //   "1"
  // )

  SearchUtils.getSearchCornNameList(token,'유니콘')

  return (
    <>
      <SearchBarMol />
      <SearchRecentMol/>
    </>
  );
}

export default SearchModalTmp;
