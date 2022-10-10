import styled from "@emotion/styled";
import React from "react";
import { color } from "../../styles/theme";
import PostTmp from "../common/tmp/PostTmp";

const SearchOutputContentsMolStyle = styled.div`
  margin: 0px 18px;
  .contents {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 54px;
    div {
      margin-bottom: 3px;
      width: calc((100vw - 40px) / 2);
    }
  }
  .sort{
    margin: 12px 0px;
    font-size: 0.875rem;
    color: ${color.p_gray_md};
    display: flex;
    justify-content: space-between;

    .icon{
      display: flex;
    }
    svg{
      transform: rotate(90deg);
    }
  }
`;

function SearchOutputContentsMol() {
  return (
    <>
      <SearchOutputContentsMolStyle>
        <div className="sort">
          <div>결과 247</div>
          <div className="icon">
            <p>추천순</p>
            <i
              data-eva="swap-outline"
              data-eva-fill={color.p_gray_md}
              data-eva-height={16}
              data-eva-width={16}
            ></i>
          </div>
        </div>

        <div className="contents">
          <PostTmp type="lg" />
          <PostTmp type="lg" />
          <PostTmp type="lg" />
          <PostTmp type="lg" />
          <PostTmp type="lg" />
          <PostTmp type="lg" />
          <PostTmp type="lg" />
          <PostTmp type="lg" />
          <PostTmp type="lg" />
          <PostTmp type="lg" />
        </div>
      </SearchOutputContentsMolStyle>
    </>
  );
}

export default SearchOutputContentsMol;
