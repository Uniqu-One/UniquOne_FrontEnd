import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { SearchUtils } from "../../lib/utils/SearchUtils";
import { TokenState } from "../../states/recoil/TokenState";
import { searchTotalListType } from "../../types/search/searchTotalListType";
import SearchOutputContentsMol from "./SearchOutputContentsMol";
import SearchOutputFilterMol from "./SearchOutputMenuOrg";
import SearchOutputUserCornMol from "./SearchOutputUserCornMol";
import ProfileFollowCardBoxMol from "../profile/ProfileFollowCardBoxMol";

function SearchOutputTmp(props: { keyword: string }) {
  const keyword = props.keyword;

  const token = useRecoilValue(TokenState).token;
  const [tempMenu, setTempMenu] = useState("전체");
  const [tempPostList, setTempPostList] = useState<searchTotalListType>({});

  const updateSearchOutputDataList = async () => {

    if(tempMenu === "전체"){
      setTempPostList(await SearchUtils.getSearchAllList(token, keyword));
    } else if(tempMenu === "상품"){
      setTempPostList(await SearchUtils.getSearchPostList(token, keyword));
    } else if(tempMenu ==="해시태그"){
      setTempPostList(await SearchUtils.getSearchHashTagList(token, keyword));
    } else if (tempMenu == "콘 유저"){

    }

    
  };

  useEffect(() => {
    updateSearchOutputDataList();
  }, [tempMenu]);

  if (tempMenu === "전체") {
    const { postList } = tempPostList;
    const { hashTagList } = tempPostList;
    const { cornList } = tempPostList;

    // console.log(cornList)
    console.log(cornList?.result)

    return (
      <>
        <SearchOutputFilterMol tempMenu={tempMenu} setTempMenu={setTempMenu}/>
        {postList && <SearchOutputContentsMol postList={postList?.result} type="상품"/>}
        {hashTagList && <SearchOutputContentsMol postList={hashTagList?.result} type="태그"/>}
        {cornList && <ProfileFollowCardBoxMol tempUserData={cornList?.result}/>}
        <SearchOutputUserCornMol/>
      </>
    );
  }


  if (tempMenu === "상품") {
    const postList = tempPostList;

    return (
      <>
        <SearchOutputFilterMol tempMenu={tempMenu} setTempMenu={setTempMenu}/>
        <SearchOutputContentsMol postList={postList?.result} type="상품"/>
        <SearchOutputUserCornMol/>
      </>
    );
  }

  if (tempMenu === "해시태그") {

    const hashTagList= tempPostList;

    return (
      <>
        <SearchOutputFilterMol tempMenu={tempMenu} setTempMenu={setTempMenu}/>
        <SearchOutputContentsMol postList={hashTagList?.result} type="태그"/>
        <SearchOutputUserCornMol/>
      </>
    );
  }

  if (tempMenu === "콘 유저") {
    const { postList } = tempPostList;
    const { hashTagList } = tempPostList;
    const { cornList } = tempPostList;

    return (
      <>
        <SearchOutputFilterMol tempMenu={tempMenu} setTempMenu={setTempMenu}/>
        <SearchOutputUserCornMol/>
      </>
    );
  }

  return <div>{tempMenu}</div>;
}

export default SearchOutputTmp;
