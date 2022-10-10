import React, { useEffect, useState } from "react";
import BottomSheetColorAtm from "./BottomSheetColorAtm";
import { postMenuListData } from "../../public/assets/datas/postMenuListData";
import styled from "@emotion/styled";
import BottomSheetTopMol from "./BottomSheetTopMol";
import { color } from "../../styles/theme";
import { CornPostState } from "../../states/recoil/CornPostState";
import { useRecoilState } from "recoil";

const BottomSheetColorMolStyle = styled.div`
  h4 {
    text-align: center;
    color: ${color.p_gray_md};
    font-size: 0.875rem;
    margin: 9px 0px;
  }
  .colorAtmStyle {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0px 18px;

    div {
      margin: 0px 6px;
    }
  }
`;

function BottomSheetColorMol(props: { setOpen: Function, type?:string}) {
  const [tempSelect, setTempSelect] = useState<string[]>([]);

  const [postData, setPostData] = useRecoilState(CornPostState);

  useEffect(() => {
    if (postData.look.length > 0) {
      setTempSelect([...postData.color]);
    }
  },[]);

  return (
    <>
      <BottomSheetColorMolStyle>
        <BottomSheetTopMol
          type="color"
          setOpen={props.setOpen}
          tempSelect={tempSelect}
          setTempSelect={setTempSelect}
        />


        
        <h4>2개까지 선택 가능합니다.</h4>
        <div className="colorAtmStyle">
          {postMenuListData.color.map((menu) => {
            return <BottomSheetColorAtm key={menu.name} menu={menu} 
            setTempSelect={setTempSelect}
            tempSelect={tempSelect}
            />;
          })}
        </div>
      </BottomSheetColorMolStyle>
    </>
  );
}

export default BottomSheetColorMol;
