import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import Eco from "../eco/Eco";

const MainCarouselCardStyle = styled.div`
  position: relative;

  img {
    width: 100%;
  }

  .carousel_desc {
    position: absolute;
    z-index: 1;
    margin-left: 24px;
    bottom: 24px;
    left: px;
    color: white;

    h2 {
      font-size: 1.2rem;
      font-weight: 750;
    }
    h3 {
      /* background-color: red; */
      padding-top: 6px;
      font-size: 0.875rem;
      margin-top: 3px;
    }
  }
`;

const MainCarouselFirsetCardStyle = styled.div``;

function MainCarouselMol(props: {
  title: string;
  subTitle: string;
  width: number;
  imgSrc: string;
  type?: string;
}) {
  const { title, subTitle, width, imgSrc, type } = props;

  if (type === "first") {
    return (
      <MainCarouselFirsetCardStyle>
        <MainCarouselCardStyle>
          <Eco/>          
          </MainCarouselCardStyle>
      </MainCarouselFirsetCardStyle>
    );
  }

  return (
    <>
      <MainCarouselCardStyle>
        <div className="carousel_desc">
          <h2>{title}</h2>
          <h3>{subTitle}</h3>
        </div>
        <Image
          
          src={imgSrc}
          alt="메인 슬라이더"
          width={"500%"}
          height={400}
          layout="fixed"
        />
      </MainCarouselCardStyle>
    </>
  );
}

export default MainCarouselMol;
