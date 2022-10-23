import styled from "@emotion/styled";
import React from "react";

import { toast, Toaster } from "react-hot-toast";
import { useRecoilState } from "recoil";
import useEvaIcon from "../../lib/hooks/useEvaIcon";
import { CornPostState } from "../../states/recoil/CornPostState";
import { SearchFilterState } from "../../states/recoil/SearchFilterState";
import { color } from "../../styles/theme";

const BottomSheetTopMolStyle = styled.div`
  height: 48px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  line-height: 48px;
  /* background-color: red; */
  padding: 0px 18px;
  border-bottom: 0.5px solid ${color.p_gray_md};

  div {
    svg {
      margin: auto 0;
      height: 100%;
      /* background-color: lightblue; */
    }
  }
  .checked {
    fill: ${color.p_pruple};
  }
`;

function BottomSheetTopMol(props: {
  type: string;
  setOpen: Function;
  tempSelect: string[];
  setTempSelect: Function;
}) {
  useEvaIcon();
  const notify = () => toast.error("선택한 옵션의 개수를 확인해주세요");
  const [postData, setPostData] = useRecoilState(CornPostState);
  const [searchFilterData, setSearchFilterData] =
    useRecoilState(SearchFilterState);

  const handlePostLookData = () => {
    if (props.tempSelect.length > 2 || props.tempSelect.length < 1) {
      notify();
      return;
    } else {
      const newData = { ...postData };
      newData.look = [...props.tempSelect];
      setPostData({ ...newData });
      props.setOpen(false);
    }
  };

  const handleColorLookData = () => {
    if (props.tempSelect.length > 2 || props.tempSelect.length < 1) {
      notify();
      return;
    } else {
      const newData = { ...postData };
      newData.color = [...props.tempSelect];
      setPostData(newData);
      props.setOpen(false);
    }
  };

  const handleUpdatePriceData = () => {
    const newData = { ...postData };
    newData.price = props.tempSelect[0];
    setPostData(newData);

    props.setOpen(false);
  };

  const handleUpdateColorData = () => {
    const newData = { ...searchFilterData };
    newData["색상"] = [...props.tempSelect];
    setSearchFilterData(newData);
    props.setOpen(false);
  };

  const handleUpdateLookData = () => {
    const newData = { ...searchFilterData };
    newData["룩"] = [...props.tempSelect];
    setSearchFilterData(newData);
    props.setOpen(false);
  };

  const handleUpdateConditionData = () => {
    const newData = { ...searchFilterData };
    newData["상태"] = [...props.tempSelect];
    setSearchFilterData(newData);

    props.setOpen(false);
  };



  return (
    <>
      <Toaster />

      {props.type === "look" && (
        <BottomSheetTopMolStyle>
          <div onClick={() => props.setOpen(false)}>
            <i data-eva="arrow-ios-back-outline"></i>
          </div>
          <div>룩</div>
          <div
            onClick={() => handlePostLookData()}
            className={props.tempSelect.length > 0 ? "checked" : "unchecked"}
          >
            <i data-eva="checkmark-outline"></i>
          </div>
        </BottomSheetTopMolStyle>
      )}

      {props.type === "color" && (
        <BottomSheetTopMolStyle>
          <div onClick={() => props.setOpen(false)}>
            <i data-eva="arrow-ios-back-outline"></i>
          </div>
          <div>색상</div>
          <div
            onClick={() => handleColorLookData()}
            className={props.tempSelect.length > 0 ? "checked" : "unchecked"}
          >
            <i data-eva="checkmark-outline"></i>
          </div>
        </BottomSheetTopMolStyle>
      )}

      {props.type === "searchColor" && (
        <BottomSheetTopMolStyle>
          <div onClick={() => props.setOpen(false)}>
            <i data-eva="arrow-ios-back-outline"></i>
          </div>
          <div>색상</div>
          <div
            onClick={() => handleUpdateColorData()}
            className={props.tempSelect.length > 0 ? "checked" : "unchecked"}
          >
            <i data-eva="checkmark-outline"></i>
          </div>
        </BottomSheetTopMolStyle>
      )}

      {props.type === "searchLook" && (
        <BottomSheetTopMolStyle>
          <div onClick={() => props.setOpen(false)}>
            <i data-eva="arrow-ios-back-outline"></i>
          </div>
          <div>룩</div>
          <div
            onClick={() => handleUpdateLookData()}
            className={props.tempSelect.length > 0 ? "checked" : "unchecked"}
          >
            <i data-eva="checkmark-outline"></i>
          </div>
        </BottomSheetTopMolStyle>
      )}

      {props.type === "searchCondition" && (
        <BottomSheetTopMolStyle>
          <div>
            <i data-eva="arrow-ios-back-outline" style={{ fill: "white" }}></i>
          </div>
          <div>상태</div>
          <div onClick={() => handleUpdateConditionData()}>
            <i data-eva="checkmark-outline"></i>
          </div>
        </BottomSheetTopMolStyle>
      )}

      {props.type === "price" && (
        <BottomSheetTopMolStyle>
          <div>
            <i data-eva="arrow-ios-back-outline" style={{ fill: "white" }}></i>
          </div>
          <div>가격</div>
          <div onClick={() => handleUpdatePriceData()}
          className={props.tempSelect[0] !== "" ? "checked" : "unchecked"}>
            <i data-eva="checkmark-outline"></i>
          </div>
        </BottomSheetTopMolStyle>
      )}
    </>
  );
}

export default BottomSheetTopMol;
