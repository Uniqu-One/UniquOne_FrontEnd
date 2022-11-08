import styled from "@emotion/styled";
import React from "react";
import { useRecoilState } from "recoil";
import { SearchModalWordState } from "../../states/recoil/SearchModalWordState";
import { color } from "../../styles/theme";
import { CornPostUploadIconOrgStyle } from "../corn/post/CornPostUploadIconOrg";
import SearchRecentBoxAtm from "./SearchRecentBoxAtm";

const SearchRecentMolStyle = styled.div`
padding-top: 50px;
margin: 0 18px;
  .recent_top {
    height: 42px;
    line-height: 42px;
    display: flex;
    justify-content: space-between;

    h3{
      font-weight: 600;
    }
    p{
      font-size: 0.80rem;
      color: ${color.p_pruple};
    }
  }
`;

function SearchRecentMol() {

  const [prevKey,setPrevKey] = useRecoilState(SearchModalWordState);

  const handleAllRemoveKey = () => {
    setPrevKey([...[]])
  }

  console.log(prevKey)
  return (
    <>
      <SearchRecentMolStyle>
        <div className="recent_top">
          <div>
            <h3>최근 검색한 키워드</h3>
          </div>
          <div onClick={() => handleAllRemoveKey()}>
            <p>모두 지우기</p>
          </div>
        </div>
        <div>
          {prevKey[0] !==undefined && prevKey.map((word:string,idx:number) => {
            return <SearchRecentBoxAtm key={idx} word={word}/>
          })}
            {prevKey[0] ===undefined && <>검색 기록이 없습니다.</>}

        </div>
      </SearchRecentMolStyle>
    </>
  );
}

export default SearchRecentMol;
