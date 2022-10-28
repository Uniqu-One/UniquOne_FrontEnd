import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { Oval } from "react-loader-spinner";
import { color } from "../../styles/theme";

function Test() {
  const container = useRef(null)
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    root:container,
    margin: "0px 0px 0px 0px" });
  return (
    <>
      <div
        ref={container}
        style={{backgroundColor: "blue", height: "90vh" }}
      >
        <div
          id="1"
          ref={ref}
          style={{ backgroundColor: "red", width: "100vw", height: "80vh" }}
        />
        <div
          id="2"
          // ref={ref}
          style={{ backgroundColor: "pink", width: "100vw", height: "100vh" }}
        />
      </div>
    </>
  );
}

export default Test;
