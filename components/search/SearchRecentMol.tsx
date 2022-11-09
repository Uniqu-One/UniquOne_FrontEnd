import styled from "@emotion/styled";
import React from "react";
import { useRecoilState } from "recoil";
import { SearchModalWordState } from "../../states/recoil/SearchModalWordState";
import { color } from "../../styles/theme";
import QuestionMarkAtm from "../common/atm/QuestionMarkAtm";
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

    h3 {
      font-weight: 600;
    }
    p {
      font-size: 0.8rem;
      color: ${color.p_pruple};
    }
  }
  .no-data{
    margin-top: 24vh;
    color: ${color.p_gray_md};
    text-align: center;
    font-size: 0.875rem;
    p{
      margin-top: 6px;
    }
    svg{
      width: 48px;
      height: 48px;
      fill: ${color.p_gray_md};
    }
  }
`;

function SearchRecentMol() {
  const [prevKey, setPrevKey] = useRecoilState(SearchModalWordState);

  const handleAllRemoveKey = () => {
    setPrevKey([...[]]);
  };

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
          {prevKey[0] !== undefined &&
            prevKey.map((word: string, idx: number) => {
              return <SearchRecentBoxAtm key={idx} word={word} />;
            })}
          {prevKey[0] === undefined && (
            <>
              <div className="no-data">
                <QuestionMarkAtm />
                <p>최근 검색한 키워드가 없습니다.</p>
              </div>
            </>
          )}
        </div>
      </SearchRecentMolStyle>
    </>
  );
}

export default SearchRecentMol;
