import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import { color } from "../../styles/theme";

const MainRecStyleSelectMolStyle = styled.div`
  border-radius: 9px;
  margin: 0px 18px 0px;
  height: 168px;
  background-color: ${color.p_gray_md};

  display: flex;
  justify-content: center;

  div {
    margin: auto 6px;
    img {
      border-radius: 9px;
    }
  }

  h3 {
    line-height: 1.3rem;
    text-align: center;
    width: 186px;
    font-weight: 700;
    background: linear-gradient(
      113.7deg,
      #e2b0f3 -14.74%,
      #e277de 44.02%,
      #79bbf9 98.08%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: auto 6px auto 0px;
    font-size: 1.2rem;
  }
`;

function MainRecStyleSelectMol() {
  return (
    <>
      <MainRecStyleSelectMolStyle>
        <div>
          <Image 
            src="/assets/images/postImage.jpg"
            alt="더미 이미지"
            width={134}
            height={134}
          />
        </div>
        <h3>
          UserName님이 선택한 포스트들을 바탕으로
          <br />
          스타일을 추천해드려요!
        </h3>
      </MainRecStyleSelectMolStyle>
    </>
  );
}

export default MainRecStyleSelectMol;
