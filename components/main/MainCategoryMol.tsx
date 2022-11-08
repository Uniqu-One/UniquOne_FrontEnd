import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import { color } from "../../styles/theme";

const MainCategoryBlockStyle = styled.div<{src:string}>`
  width: 60px;
  height: 60px;
  border-radius: 9px;
  background-color: ${color.p_gray_lt};
  margin-bottom: 9px;
  background-image: url(${(props) => props.src});
  background-size: 75%;
  background-repeat: no-repeat;
  background-position: center;
  
`;

const MainCategoryBlockTitleStyle = styled.p`
  color: ${color.p_gray_dk};
  text-align: center;
  font-size: 0.875rem;
  
`;

function MainCategoryMol(props: { title: string, src:string}) {
  return (
    <Link href={`/search/${props.title}`}>
      <a>
      <MainCategoryBlockStyle src={props.src}/>
        <MainCategoryBlockTitleStyle>{props.title}</MainCategoryBlockTitleStyle>
      </a>
    </Link>
  );
}

export default MainCategoryMol;
