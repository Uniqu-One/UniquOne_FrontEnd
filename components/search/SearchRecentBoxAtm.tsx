import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React from "react";
import { useRecoilState } from "recoil";
import useEvaIcon from "../../lib/hooks/useEvaIcon";
import { SearchModalState } from "../../states/recoil/SearchModalState";
import { SearchModalWordState } from "../../states/recoil/SearchModalWordState";
import { color } from "../../styles/theme";

const SearchRecentBoxAtmStyle = styled.div`
  color: ${color.p_gray_dk};
  height: 36px;
  line-height: 36px;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid ${color.p_gray_lt};
  p {
    font-size: 0.875rem;
  }

  .icon{
    svg{
      fill: ${color.p_gray_dk};
      height: 100%;
      margin: auto 0;
    }
    
  }
`;

function SearchRecentBoxAtm(props:{word:string}) {
  useEvaIcon();
  const router = useRouter();
  const [modalState, setModalState] = useRecoilState(SearchModalState);
  const [prevKey, setPrevKey] = useRecoilState(SearchModalWordState);

  const handleClickPrevSearch = () => {
    router.push(`search/${props.word}`)
    setModalState(false);
  }

  const handleRemoveKey = () => {

    //1인덱스 찾기
    const idx = prevKey.indexOf(props.word)
    const prev = prevKey.slice(0,idx)
    const next = prevKey.slice(idx+1)
    const newArr = [...prev,...next]
    console.log(newArr)
    setPrevKey([...newArr])
    //해당 인덱스까지 찢고, 뒤에 인덱스부터 찢기
    //두개 더해서 변경하기

  }

  return (
    <SearchRecentBoxAtmStyle >
      <div onClick={() => handleClickPrevSearch()}>
        <p>{props.word}</p>
      </div>
      <div className="icon" onClick={() => handleRemoveKey()}>
        <i data-eva="close-outline"></i>
      </div>
    </SearchRecentBoxAtmStyle>
  );
}

export default SearchRecentBoxAtm;
