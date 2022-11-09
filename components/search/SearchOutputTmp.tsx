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
import QuestionMarkAtm from "../common/atm/QuestionMarkAtm";
import { color } from "../../styles/theme";

const SearchOutPutTopBottomPaddingStyle = styled.div`
  padding-top: 112px;
  padding-bottom: 60px;

  .no-data {
    text-align: center;
    margin-top: 24vh;
    color: ${color.p_gray_md};
    svg {
      width: 48px;
      height: 48px;
      fill: ${color.p_gray_md};
    }
    p {
      margin-top: 6px;
      font-size: 0.875rem;
    }
  }
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

  const { postList } = tempPostList;
  const { hashTagList } = tempPostList;
  const { cornList } = tempPostList;

  useEffect(() => {
    updateSearchOutputDataList();
  }, [tempMenu, searchFilterData, keyword]);

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



  if (tempMenu === "전체") {
//@ts-ignore
    if (!postList?.result[0] && !hashTagList?.result[0] && !cornList?.result[0]) {
      return (
        <SearchOutPutTopBottomPaddingStyle>
          <div className="no-data">
            <QuestionMarkAtm />
            <p>검색어에 대한 결과가 없습니다.</p>
          </div>
        </SearchOutPutTopBottomPaddingStyle>
      );
    }
    return (
      <SearchOutPutTopBottomPaddingStyle>
        {postList ? (
          <SearchOutputContentsMol postList={postList?.result} type="상품" />
        ) : (
          <div className="no-data">
          <QuestionMarkAtm />
          <p>검색어에 대한 결과가 없습니다.</p>
        </div>
        )}
        {hashTagList ? (
          <SearchOutputContentsMol
            postList={hashTagList?.result}
            type="해시태그"
          />
        ) : (
          <div className="no-data">
          <QuestionMarkAtm />
          <p>검색어에 대한 결과가 없습니다.</p>
        </div>
        )}
        {cornList && cornList?.totalSearchCnt ? (
          <ProfileFollowCardBoxMol tempUserData={cornList?.result} />
        ) : (
          <div className="no-data">
          <QuestionMarkAtm />
          <p>검색어에 대한 결과가 없습니다.</p>
        </div>
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
          <SearchOutputContentsMol
          //@ts-ignore
            postList={postList?.result}
            type="상품"
            tap="on"
          />
        </SearchOutPutTopBottomPaddingStyle>
      </>
    );
  }

  if (tempMenu === "해시태그") {
    const hashTagList = tempPostList;

    return (
      <>
        <SearchOutPutTopBottomPaddingStyle>
          {/* @ts-ignore */}
          <SearchOutputContentsMol
          //@ts-ignore
            postList={hashTagList?.result}
            type="해시태그"
          />
          <SearchOutputUserCornMol />
        </SearchOutPutTopBottomPaddingStyle>
      </>
    );
  }

  if (tempMenu === "콘 유저") {
    return (
      <>
        <SearchOutPutTopBottomPaddingStyle>
          {cornList && cornList?.totalSearchCnt ? (
            <ProfileFollowCardBoxMol tempUserData={cornList?.result} />
          ) : (
            <>
              <div className="no-data">
                <QuestionMarkAtm />
                <p>콘 또는 유저에 해당하는 결과가 없습니다.</p>
              </div>
            </>
          )}
        </SearchOutPutTopBottomPaddingStyle>
      </>
    );
  }

  return <div>{tempMenu}</div>;
}

export default SearchOutputTmp;
