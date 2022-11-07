import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import useEvaIcon from "../../lib/hooks/useEvaIcon";
import { ToastUtils } from "../common/tmp/ToastTmp";import { SearchModalState } from "../../states/recoil/SearchModalState";
import { color } from "../../styles/theme";

const SearchBarMolStyle = styled.div`
  background-color: white;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 8;
  display: flex;
  justify-content: space-between;
  height: 48px;
  border-bottom: 0.5px solid ${color.p_gray_lt};
  fill: ${color.p_gray_dk};
  div {
    margin: auto 0;
    margin-left: 18px;
  }

  input {
    margin-right: 18px;
    height: 30px;
    background-color: ${color.p_gray_lt};
    border: none;
    border-radius: 12px;
    width: calc(100vw - 84px);
    padding-left: 12px;
  }

  .search_input {
    position: relative;
  }
  .search_icon {
    position: absolute;
    right: 30px;
    top: 6px;
    fill: ${color.p_gray_md};
  }
`;

function SearchBarMol(props: { keyword?: string }) {
  const router = useRouter();
  useEvaIcon();

  const { keyword } = props;

  const [modalState, setModalState] = useRecoilState(SearchModalState);

  const [searchWord, setSearchWord] = useState<string|undefined>("");

  const handleChangeSearchPage = () => {
    if (searchWord !== "") {
      router.push(`/search/${searchWord}`);
      setModalState(false);
    } else {
      ToastUtils.toast("검색어를 입력해주세요");
    }
  };

  useEffect(() => {
    {
      /* @ts-ignore */
    }
    setSearchWord(keyword);
  }, [keyword]);

  return (
    <>
      <SearchBarMolStyle>
        {keyword ? (
          <div onClick={() => {
            setModalState(false)
            router.back()
            }}>
            <i data-eva="arrow-ios-back-outline"></i>
          </div>
        ) : (
          <div onClick={() => setModalState(false)}>
            <i data-eva="close-outline"></i>
          </div>
        )}

        <div className="search_input">
          <input
            type="text"
            placeholder="검색어를 입력해주세요"
            value={searchWord ? searchWord : ""}
            onChange={(e) => setSearchWord(e.target.value)}
          />
          <span onClick={() => handleChangeSearchPage()}>
            <i
              className="search_icon"
              data-eva="search-outline"
              data-eva-height="18px"
              data-eva-width="18px"
            ></i>
          </span>
        </div>
      </SearchBarMolStyle>
    </>
  );
}

export default SearchBarMol;
