import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";

const MainCarouselCardStyle = styled.div`
  position: relative;

  img {
    width: 100%;
  }

  .carousel_desc {
    position: absolute;
    z-index: 500;
    margin-left: 24px;
    bottom: 32px;
    color: white;

    h2 {
      font-size: 1.2rem;
      font-weight: 750;
    }
    h3 {
      font-size: 0.875rem;
      margin-top: 3px;
    }
  }
`;

function MainCarouselMol(props: { title: string; subTitle: string; width:number }) {
  const { title, subTitle, width } = props;
  return (
    <>
      <MainCarouselCardStyle>
        <div className="carousel_desc">
          <h2>{title}</h2>
          <h3>{subTitle}</h3>
        </div>
        <Image
          src="/assets/images/carouselImage.jpg"
          alt="메인 슬라이더"
          width={100*width+'%'}
          height={400}
        />
      </MainCarouselCardStyle>
    </>
  );
}

export default MainCarouselMol;
