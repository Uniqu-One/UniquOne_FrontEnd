import React from "react";
import BottomSheetColorAtm from "./BottomSheetColorAtm";
import { postMenuListData } from "../../public/assets/datas/postMenuListData";
import styled from "@emotion/styled";

const BottomSheetColorMolStyle = styled.div`
  .colorAtmStyle {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0px 18px;
    div{
      margin: 0px 6px;
    }
  }
`;

function BottomSheetColorMol(props: { setOpen: Function }) {
  return (
    <>
      <BottomSheetColorMolStyle>
        <div>BottomSheetColorMol</div>

        <div className="colorAtmStyle">
          {postMenuListData.color.map((menu) => {
            
            return <BottomSheetColorAtm key={menu.name} menu={menu} />;
          })}
        </div>
      </BottomSheetColorMolStyle>
    </>
  );
}

export default BottomSheetColorMol;
