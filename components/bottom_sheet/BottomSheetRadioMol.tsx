import styled from "@emotion/styled";
import React, { useState } from "react";
import { color } from "../../styles/theme";
import { postMenuListData } from "../../public/assets/datas/postMenuListData";
import { title } from "process";
import BottomSheetTopMol from "./BottomSheetTopMol";
import TopTmp from "../common/tmp/TopTmp";
import BottomSheetRoundBoxAtm from "./BottomSheetRoundBoxAtm";
import BottomLookMol from "./BottomLookMol";

<<<<<<< HEAD
//TODO - 메뉴별로 컴포넌트 그냥 나누는게 좋을듯
=======
import BottomSheetTopMol from "./BottomSheetTopMol";
import TopTmp from "../common/tmp/TopTmp";
import BottomSheetRoundBoxAtm from "./BottomSheetRoundBoxAtm";
import BottomSheetLookMol from "./BottomSheetLookMol";
import { useRecoilState } from "recoil";
import { CornPostState } from "../../states/recoil/CornPostState";
import BottomSheetColorMol from "./BottomSheetColorMol";

>>>>>>> 52d6e1793de3bd9cc5199230c332d16269c36b93
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
    /* background-color: lightslategray; */
    margin-bottom: 12px;
  }
`;

<<<<<<< HEAD

const UniStarFilterMenu = ["전체", "1 Star", "2 Star", "3 Star"];
=======
>>>>>>> 52d6e1793de3bd9cc5199230c332d16269c36b93

function BottomSheetRadioMol(props: {
  setOpen: Function;
  handleTempSelect?: Function;
  tempMenu?: string;
}) {
  const [postData, setPostData] = useRecoilState(CornPostState);

  const { setOpen } = props;
  const [tempIdx, setTempIdx] = useState(0);

  const handleChangeIdx = (selectedTab: string, idx: number) => {
    setTempIdx(idx);

    if(props.handleTempSelect){
      props.handleTempSelect(selectedTab);
      setOpen(false);
    }
    
  };


<<<<<<< HEAD

if(props.tempMenu === "type" || props.tempMenu === "condition"){
{
  
  return <BottomSheetRadioMolStyle>
  <div>
    <h3>{props.tempMenu === "type" ? "포스트 분류":"상태"}</h3>
  </div>
  <div>
    {postMenuListData[props.tempMenu].map((menu, idx) => {
=======
  if (props.tempMenu === "type") {
    {
>>>>>>> 52d6e1793de3bd9cc5199230c332d16269c36b93
      return (
        <BottomSheetRadioMolStyle>
          <div>
            <h3>포스트 분류</h3>
          </div>
          <div>
            {postMenuListData[props.tempMenu].map((menu, idx) => {
              return (
                <label
                  key={idx}
                  htmlFor={menu.title}
                  onClick={() => handleChangeIdx(menu.title, idx)}
                >
                  <input
                    type="radio"
                    name={menu.title}
                    value={menu.title}
                    checked={postData.type === menu.title ? true : false}
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
                <label
                  key={idx}
                  htmlFor={menu.title}
                  onClick={() => handleChangeIdx(menu.title, idx)}
                >
                  <input
                    type="radio"
                    name={menu.title}
                    value={menu.title}
                    checked={postData.condition === menu.title ? true : false}
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

  if (props.tempMenu === "category") {
    {
      return (
        <BottomSheetRadioMolStyle>
          <div>
            <h3>정렬</h3>
          </div>
          <div>
            {postMenuListData[props.tempMenu].map((menu, idx) => {
              return (
                <label
                  key={idx}
                  htmlFor={menu}
                  onClick={() => handleChangeIdx(menu, idx)}
                >
                  <input
                    type="radio"
                    name={menu}
                    value={menu}
                    checked={postData.category === menu ? true : false}
                    // checked={tempIdx === idx ? true : false}
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

<<<<<<< HEAD
  if(props.tempMenu === "look"){
    return(
      <BottomLookMol setOpen={setOpen}/>
    )
=======

  if (props.tempMenu === "look") {
    return <BottomSheetLookMol setOpen={setOpen} />;
>>>>>>> 52d6e1793de3bd9cc5199230c332d16269c36b93
  }

  if (props.tempMenu === "color") {
    return <BottomSheetColorMol setOpen={setOpen}/>;
  }

  const UniStarFilterMenu = ["전체", "1 Star", "2 Star", "3 Star"];

  return (
    <BottomSheetRadioMolStyle>
      <div>
        <h3>정렬</h3>
      </div>
      <div>
        {UniStarFilterMenu.map((menu, idx) => {
          return (
            <label
              key={idx}
              htmlFor={menu}
              onClick={() => handleChangeIdx("", idx)}
            >
              <input
                type="radio"
                name={menu}
                value={menu}
                checked={tempIdx === idx ? true : false}
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

export default BottomSheetRadioMol;
