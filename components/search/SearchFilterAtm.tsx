import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import useEvaIcon from "../../lib/hooks/useEvaIcon";
import { SearchFilterState } from "../../states/recoil/SearchFilterState";
import { color } from "../../styles/theme";

const SearchFilterAtmStyle = styled.div<{ status: Boolean }>`
  padding: 6px 12px;
  font-size: 0.875rem;
  display: flex;
  background-color: ${(props) =>
    props.status ? color.p_pruple : color.p_gray_lt};

  color: ${(props) => (props.status ? "white" : color.p_gray_dk)};
  fill: ${(props) => (props.status ? "white" : color.p_gray_dk)};

  margin-right: 6px;
  border-radius: 9px;

  div {
    margin: auto 0;
  }

  p {
    margin-right: 1px;
  }
`;

function SearchFilterAtm(props: { filter: string }) {
  useEvaIcon();

  const filterName = props.filter;

  const [searchFilterData, setSearchFilterData] =
    useRecoilState(SearchFilterState);
  const [menuSelStatus, setMenuSelStatus] = useState(false);

  useEffect(() => {
    if (searchFilterData[filterName][0]) {
      setMenuSelStatus(true);
    } else {
      setMenuSelStatus(false);
    }
  }, [searchFilterData]);

  return (
    <SearchFilterAtmStyle status={menuSelStatus}>
      <div>
        {searchFilterData[filterName][0]? (
          <p>{searchFilterData[filterName].join(", ")}</p>
        ) : (
          <p>{props.filter}</p>
        )}
      </div>
      <div className="icon">
        <i data-eva="arrow-ios-downward-outline"></i>
      </div>
    </SearchFilterAtmStyle>
  );
}

export default SearchFilterAtm;
