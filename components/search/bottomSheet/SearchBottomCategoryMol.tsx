import styled from "@emotion/styled";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { postMenuListData } from "../../../public/assets/datas/postMenuListData";
import { CornPostState } from "../../../states/recoil/CornPostState";
import { SearchFilterState } from "../../../states/recoil/SearchFilterState";
import { color } from "../../../styles/theme";

const BottomSheetRadioMolStyle = styled.div`
  > div {
    :first-of-type {
      border-bottom: 1px solid ${color.p_gray_lt};
      height: 42px;
      text-align: center;
      line-height: 42px;
      font-weight: 700;
      margin-bottom: 3px;
    }
    :last-of-type {
      display: flex;
      flex-direction: column;
    }
  }

  label {
    accent-color: ${color.p_pruple};
    margin: 3px 18px;
    border-bottom: 1px solid ${color.p_gray_lt};

    display: flex;
    p {
      padding: 12px 0px;
      margin-left: 9px;
      display: flex;
      flex-direction: column;
      font-weight: 650;
    }
    span {
      margin-top: 6px;
      font-size: 0.8rem;
      color: ${color.p_gray_md};
      font-weight: 400;
    }
  }

  :last-of-type {
    margin-bottom: 12px;
  }
`;

function BottomSheetRadioMol(props: { setOpen: Function; tempMenu: string }) {
  const { setOpen } = props;
  const [searchFilterData, setSearchFilterData] =
    useRecoilState(SearchFilterState);

  const handleSetCategory = (menu: string) => {
    const tempArr = [];
    tempArr.push(menu);

    const newData = { ...searchFilterData };
    newData["카테고리"] = [...tempArr];
    setSearchFilterData({ ...newData });

    setOpen(false);
  };

  const handleResetCategory = () => {

    const newData = { ...searchFilterData };
    newData["카테고리"] = [];
    setSearchFilterData({ ...newData });

    setOpen(false);
  }


  if (props.tempMenu === "category") {
    {
      return (
        <BottomSheetRadioMolStyle>
          <div>
            <h3>카테고리</h3>
          </div>
          <div>
            <label onClick={() => handleResetCategory()}>
              <input type="radio" readOnly checked={searchFilterData['카테고리'][0]===undefined}/>
              <p>전체선택</p>
            </label>


            {postMenuListData.category.map((menu, idx) => {
              return (
                <label
                  key={idx}
                  htmlFor={menu}
                  onClick={() => handleSetCategory(menu)}
                >
                  <input
                    type="radio"
                    name={menu}
                    value={menu}
                    checked={searchFilterData["카테고리"][0] === menu}
                    readOnly
                  />
                  <p>{menu}</p>
                </label>
              );
            })}
          </div>
        </BottomSheetRadioMolStyle>
      );
    }
  }

  if (props.tempMenu === "condition") {
    {
      return (
        <BottomSheetRadioMolStyle>
          <div>
            <h3>상태</h3>
          </div>
          <div>
            {postMenuListData[props.tempMenu].map((menu, idx) => {
              return (
                <label key={idx} htmlFor={menu.title}>
                  <input
                    type="radio"
                    name={menu.title}
                    value={menu.title}
                    // checked={tempIdx === idx ? true : false}
                    readOnly
                  />
                  <p>
                    {menu.title}
                    <span>{menu.desc}</span>
                  </p>
                </label>
              );
            })}
          </div>
        </BottomSheetRadioMolStyle>
      );
    }
  }

  return <></>;
}

export default BottomSheetRadioMol;
