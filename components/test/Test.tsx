import styled from "@emotion/styled";
import axios from "axios";
import { useInView } from "framer-motion";
import Lottie from "lottie-web";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { Oval } from "react-loader-spinner";
import { color } from "../../styles/theme";

const EcoStyle = styled.div`
  background-color: red;

  display: flex;
  div {
    position: relative;
    svg {
      width: 150px;
      height: 150px;
    }
    p {
      position: absolute;
      width: 100%;
      text-align: center;
      z-index: 2;
      bottom: 12px;
    }
  }
`;

function Test() {
  const [data, setData] = useState();

  const moveCarbone = useRef(null);
  const moveDistance = useRef(null);
  const moveWater = useRef(null);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_URL_AWS}/eco/all`)
      .then((res) => setData(res.data.data))
      .catch((err) => console.error(err));

    if (moveCarbone.current)
      Lottie.loadAnimation({
        container: moveCarbone.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../../public/assets/images/animation/carboneMove.json"),
      });

    if (moveDistance.current)
      Lottie.loadAnimation({
        container: moveDistance.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../../public/assets/images/animation/DistanceMove.json"),
      });

    if (moveWater.current)
      Lottie.loadAnimation({
        container: moveWater.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../../public/assets/images/animation/waterMove.json"),
      });
  }, []);

  // console.log(data);

  return (
    <>
    <div>지금껏 유니콘들이 지켜온 환경지수에요</div>
      <EcoStyle>
        <div ref={moveCarbone}>
          <p>
            <CountUp end={100} duration={2} />
          </p>
        </div>
        <div ref={moveDistance}>
          <p>
            <CountUp end={150} duration={2} />
          </p>
        </div>
        <div ref={moveWater}>
          <p>
            <CountUp end={200} duration={2} />
          </p>
        </div>
      </EcoStyle>
    </>
  );
}

export default Test;
