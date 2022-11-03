import styled from "@emotion/styled";
import Lottie from "lottie-web";
import React, { useEffect, useRef } from "react";

const BellIconStyle = styled.div`
width: 24px;
height: 24px;
`

function BellIcon() {
  const moveBellCon = useRef(null);

  useEffect(() => {
    if (moveBellCon.current)
      Lottie.loadAnimation({
        container: moveBellCon.current,
        renderer: "svg",
        loop: true,
        autoplay: true,  
        animationData: require("../../../public/assets/images/animation/bell.json"),
      });
  }, []);

  return (
    <BellIconStyle
      ref={moveBellCon}
      className="bell"
      style={{ marginRight: "18px" }}
    ></BellIconStyle>
  );
}

export default BellIcon;
