import styled from "@emotion/styled";
import React from "react";
import Slider from "react-slick";
import MainCarouselMol from "./MainCarouselMol";
import { mainCarouselDummy } from "../../public/assets/datas/mainCarouselDummy";

const MainCarouselStyle = styled.div`
  padding-top: 48px;
`;

function MainCarouselTmp() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4200,
  };
  return (
    <MainCarouselStyle>
      <Slider {...settings}>
        <MainCarouselMol
              type="first"
              title={"하이"}
              subTitle={"바이"}
              width={1}
              imgSrc={'/'}
            />
        {mainCarouselDummy.map((slide) => {
          return (
            <MainCarouselMol
              key={slide.id}
              title={slide.title}
              subTitle={slide.subTitle}
              width={mainCarouselDummy.length}
              imgSrc={slide.imgSrc}
            />
          );
        })}
      </Slider>
    </MainCarouselStyle>
  );
}

export default MainCarouselTmp;
