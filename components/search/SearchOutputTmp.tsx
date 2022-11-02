import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { SearchUtils } from "../../lib/utils/SearchUtils";
import { TokenState } from "../../states/recoil/TokenState";
import { searchTotalListType } from "../../types/search/searchTotalListType";
import SearchOutputContentsMol from "./SearchOutputContentsMol";
import SearchOutputFilterMol from "./SearchOutputMenuOrg";
import SearchOutputUserCornMol from "./SearchOutputUserCornMol";
import ProfileFollowCardBoxMol from "../profile/ProfileFollowCardBoxMol";
import styled from "@emotion/styled";
import SearchFilterMol from "./SearchFilterMol";
import { SearchFilterState } from "../../states/recoil/SearchFilterState";

const SearchOutputMenuOrgOverFlowStyle = styled.div`
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

function SearchOutputTmp(props: { keyword: string }) {
  const keyword = props.keyword;

  const token = useRecoilValue(TokenState).token;
  const [tempMenu, setTempMenu] = useState("전체");
  const [tempPostList, setTempPostList] = useState<searchTotalListType>({});

  const [searchFilterData,setSearchFilterData] = useRecoilState(SearchFilterState)

  const updateSearchOutputDataList = async () => {
    if (tempMenu === "전체") {
      setTempPostList(await SearchUtils.getSearchAllList(token, keyword));
    } else if (tempMenu === "상품") {
      
      setTempPostList(await SearchUtils.getSearchPostList(token, keyword, searchFilterData));
    } else if (tempMenu === "해시태그") {
      setTempPostList(await SearchUtils.getSearchHashTagList(token, keyword));
    } else if (tempMenu == "콘 유저") {
    }
  };

  useEffect(() => {
    updateSearchOutputDataList();
  }, [tempMenu,searchFilterData]);

  if (tempMenu === "전체") {
    const { postList } = tempPostList;
    const { hashTagList } = tempPostList;
    const { cornList } = tempPostList;

    return (
      <>
        <SearchOutputFilterMol tempMenu={tempMenu} setTempMenu={setTempMenu} />
        {postList ? (
          <SearchOutputContentsMol postList={postList?.result} type="상품" />
        ) : (
          <></>
        )}
        {hashTagList ? (
          <SearchOutputContentsMol postList={hashTagList?.result} type="태그" />
        ) : (
          <></>
        )}
        {cornList ? (
          <ProfileFollowCardBoxMol tempUserData={cornList?.result} />
        ) : (
          <></>
        )}
        <SearchOutputUserCornMol />
      </>
    );
  }

  if (tempMenu === "상품") {
    const postList = tempPostList;

    return (
      <>
        <SearchOutputFilterMol tempMenu={tempMenu} setTempMenu={setTempMenu} />
        <SearchOutputMenuOrgOverFlowStyle>
          {tempMenu === "상품" && (
            <SearchFilterMol />
          )}
        </SearchOutputMenuOrgOverFlowStyle>
        {/* @ts-ignore */}
        <SearchOutputContentsMol postList={postList?.result} type="상품" />
      </>
    );
  }

  if (tempMenu === "해시태그") {
    const hashTagList = tempPostList;

    return (
      <>
        <SearchOutputFilterMol tempMenu={tempMenu} setTempMenu={setTempMenu} />
        {/* @ts-ignore */}
        <SearchOutputContentsMol postList={hashTagList?.result} type="태그" />
        <SearchOutputUserCornMol />
      </>
    );
  }

  if (tempMenu === "콘 유저") {


    return (
      <>
        <SearchOutputFilterMol tempMenu={tempMenu} setTempMenu={setTempMenu} />
        <SearchOutputUserCornMol />
      </>
    );
  }

  return <div>{tempMenu}</div>;
}

export default SearchOutputTmp;
