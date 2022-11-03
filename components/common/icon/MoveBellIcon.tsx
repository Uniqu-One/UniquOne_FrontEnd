import styled from "@emotion/styled";
import Lottie from "lottie-web";
import React, { useEffect, useRef } from "react";

const MoveBellIconStyle = styled.div`
width: 24px;
height: 24px;
`

function MoveBellIcon() {
  const moveBellCon = useRef(null);

  useEffect(() => {
    if (moveBellCon.current)
      Lottie.loadAnimation({
        container: moveBellCon.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../../../public/assets/images/animation/bellMove.json"),
      });
  }, []);

  return (
    <MoveBellIconStyle
      ref={moveBellCon}
      className="bell"
      style={{ marginRight: "18px" }}
    ></MoveBellIconStyle>
  );
}

export default MoveBellIcon;
