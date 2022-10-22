import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { Oval } from "react-loader-spinner";
import { color } from "../../styles/theme";

function Test() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-800px 0px 0px 0px", once: true });

  useEffect(() => {
    console.log(ref);
    console.log(isInView);
  }, [isInView]);

  return (
    <>
      <div
        style={{ overflow: "scroll", backgroundColor: "blue", height: "300vh" }}
      >
        <div
          id="1"
          ref={ref}
          style={{ backgroundColor: "red", width: "100vw", height: "100vh" }}
        />
        <div
          id="2"
          ref={ref}
          style={{ backgroundColor: "pink", width: "100vw", height: "100vh" }}
        />
      </div>
    </>
  );
}

export default Test;
