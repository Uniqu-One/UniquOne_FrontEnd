import styled from "@emotion/styled";
import React from "react";

const BottomSheetColorAtmStyle = styled.div`
  width: 72px;
  height: 84px;
  background-color: white;
  border: 1px solid black;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .colorChip {
    display: flex;
    justify-content: center;
    margin: 0 auto;

    background-color: red;
    width: 30px;
    height: 30px;
    border-radius: 100%;
  }
`;

function BottomSheetColorAtm(props: { menu: { name: string; code: string } }) {
  const { name, code } = props.menu;

  

  return (
    <BottomSheetColorAtmStyle>
      <div className="colorChip"></div>
      <div>
        <p>{name}</p>
      </div>
    </BottomSheetColorAtmStyle>
  );
}

export default BottomSheetColorAtm;
