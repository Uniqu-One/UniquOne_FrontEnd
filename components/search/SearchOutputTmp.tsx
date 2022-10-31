import React from "react";
import { useRecoilValue } from "recoil";
import { SearchUtils } from "../../lib/utils/SearchUtils";
import { TokenState } from "../../states/recoil/TokenState";
import SearchOutputContentsMol from "./SearchOutputContentsMol";
import SearchOutputFilterMol from "./SearchOutputMenuOrg";

function SearchOutputTmp(props:{keyword:string}) {
  const keyword = props.keyword;

  const token = useRecoilValue(TokenState).token
  const searchOutputDataList = SearchUtils.getSearchAllList(token,keyword)

  return (
    <>
      <SearchOutputFilterMol />
      <SearchOutputContentsMol />
    </>
  );
}

export default SearchOutputTmp;
