import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

const TestStyle = styled.div`
  .box1 {
    background-color: lightblue;
    height: 50px;
  }

  .box2 {
    background-color: red;
    height: 50px;
  }
`;

function Test() {

  const sliderRef = useRef(null);
  const [temp,setTemp] = useState(0)

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 0.2,

    afterChange: (current) => {
      setTemp(current)
    },
    // beforeChange: (current, next) => {
      
    // },
  };


  useEffect(() => {
    console.log(temp)
    if(temp > 0.2){
      console.log('큽니다.');
      sliderRef.current.slickGoTo(0.2)
    }

  },[temp])

  return (
    <>
      <TestStyle>
        <Slider ref={sliderRef} {...settings}>
          <div className="box1">
            <p>100</p>
          </div>
          <div className="box2">
            <p>200</p>
          </div>
        </Slider>
      </TestStyle>
    </>
  );
}

export default Test;
