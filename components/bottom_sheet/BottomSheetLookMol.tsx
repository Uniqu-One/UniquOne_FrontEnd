import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { color } from "../../styles/theme";
import BottomSheetTopMol from "./BottomSheetTopMol";
import { postMenuListData } from "../../public/assets/datas/postMenuListData";
import BottomSheetRoundBoxAtm from "./BottomSheetRoundBoxAtm";
import { useRecoilState } from "recoil";
import { CornPostState } from "../../states/recoil/CornPostState";

const LookStyle = styled.div`
  margin: 18px 18px 30px;

  h4 {
    text-align: center;
    color: ${color.p_gray_md};
    font-size: 0.875rem;
    margin: 9px 0px;
  }
  div {
    margin: 6px 6px;
  }
`;

function BottomSheetLookMol(props: { setOpen: Function }) {
  const [tempSelect, setTempSelect] = useState<string[]>([]);

  const [postData, setPostData] = useRecoilState(CornPostState);

  useEffect(() => {
    if (postData.look.length > 0) {
      setTempSelect([...postData.look])
    }
  }, []);

  return (
    <>
      <BottomSheetTopMol
        type="look"
        setOpen={props.setOpen}
        tempSelect={tempSelect}
        setTempSelect={setTempSelect}
      />
      <LookStyle>
        <h4>2개까지 선택 가능합니다.</h4>
        {postMenuListData.look.map((menu) => {
          return (
            <BottomSheetRoundBoxAtm
              key={menu}
              menu={menu}
              setTempSelect={setTempSelect}
              tempSelect={tempSelect}
            />
          );
        })}
      </LookStyle>
    </>
  );
}

export default BottomSheetLookMol;
