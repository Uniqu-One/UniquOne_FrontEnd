import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import { color } from "../../styles/theme";

const MainCategoryBlockStyle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 9px;
  background-color: ${color.p_gray_md};
  margin-bottom: 9px;
`;

const MainCategoryBlockTitleStyle = styled.p`
  color: ${color.p_gray_dk};
  text-align: center;
  font-size: 0.875rem;
  
`;

function MainCategoryMol(props: { title: string }) {
  return (
    <Link href="/">
      <a>
        <MainCategoryBlockStyle />
        <MainCategoryBlockTitleStyle>{props.title}</MainCategoryBlockTitleStyle>
      </a>
    </Link>
  );
}

export default MainCategoryMol;
