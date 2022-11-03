import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { SearchUtils } from "../../lib/utils/SearchUtils";
import { TokenState } from "../../states/recoil/TokenState";
import { searchTotalListType } from "../../types/search/searchTotalListType";
import SearchOutputContentsMol from "./SearchOutputContentsMol";
import SearchOutputUserCornMol from "./SearchOutputUserCornMol";
import ProfileFollowCardBoxMol from "../profile/ProfileFollowCardBoxMol";
import styled from "@emotion/styled";
import { SearchFilterState } from "../../states/recoil/SearchFilterState";

const SearchOutputMenuOrgOverFlowStyle = styled.div`
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const SearchOutPutTopBottomPaddingStyle = styled.div`
  padding-top: 112px;
  padding-bottom: 60px;
`;

function SearchOutputTmp(props: {
  keyword: string;
  tempMenu: string;
  setTempMenu: Function;
}) {
  const keyword = props.keyword;

  const token = useRecoilValue(TokenState).token;
  const { tempMenu, setTempMenu } = props;
  const [tempPostList, setTempPostList] = useState<searchTotalListType>({});

  const [searchFilterData, setSearchFilterData] =
    useRecoilState(SearchFilterState);

  const updateSearchOutputDataList = async () => {
    if (tempMenu === "전체") {
      setTempPostList(await SearchUtils.getSearchAllList(token, keyword));
    } else if (tempMenu === "상품") {
      setTempPostList(
        await SearchUtils.getSearchPostList(token, keyword, searchFilterData)
      );
    } else if (tempMenu === "해시태그") {
      setTempPostList(await SearchUtils.getSearchHashTagList(token, keyword));
    } else if (tempMenu == "콘 유저") {
    }
  };

  useEffect(() => {
    updateSearchOutputDataList();
  }, [tempMenu, searchFilterData, keyword]);

  if (tempMenu === "전체") {
    const { postList } = tempPostList;
    const { hashTagList } = tempPostList;
    const { cornList } = tempPostList;

    // console.log(cornList?.totalSearchCnt)

    return (
      <SearchOutPutTopBottomPaddingStyle>
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
        {cornList && cornList?.totalSearchCnt ? (
          <ProfileFollowCardBoxMol tempUserData={cornList?.result} />
        ) : (
          <></>
        )}
        <SearchOutputUserCornMol />
      </SearchOutPutTopBottomPaddingStyle>
    );
  }

  if (tempMenu === "상품") {
    const postList = tempPostList;

    return (
      <>
        <SearchOutPutTopBottomPaddingStyle>
          {/* @ts-ignore */}
          <SearchOutputContentsMol postList={postList?.result} type="상품" />
        </SearchOutPutTopBottomPaddingStyle>
      </>
    );
  }

  if (tempMenu === "해시태그") {
    const hashTagList = tempPostList;

    return (
      <>
        <SearchOutPutTopBottomPaddingStyle>
          <SearchOutputContentsMol postList={hashTagList?.result} type="태그" />
          <SearchOutputUserCornMol />
        </SearchOutPutTopBottomPaddingStyle>
      </>
    );
  }

  if (tempMenu === "콘 유저") {
    return (
      <>
        <SearchOutPutTopBottomPaddingStyle>
          <SearchOutputUserCornMol />
        </SearchOutPutTopBottomPaddingStyle>
      </>
    );
  }

  return <div>{tempMenu}</div>;
}

export default SearchOutputTmp;
