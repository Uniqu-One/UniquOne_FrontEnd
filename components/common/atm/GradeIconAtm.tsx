import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";

const GradeIconAtmStyle = styled.div`

`;

function GradeIconAtm(props: {
  width: number;
  heigth: number;
  color?: "string";
}) {
  return (
    <GradeIconAtmStyle>
      <img  
        src="/assets/icons/uniquOneLogo.svg"
        alt="등급 아이콘"
        width={props.width}
        height={props.heigth}
      />
    </GradeIconAtmStyle>
  );
}

export default GradeIconAtm;
