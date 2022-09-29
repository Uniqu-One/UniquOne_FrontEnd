import * as React from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import UniStarMol from "../common/mol/UniStarMol";
import UniStarAtm from "../common/atm/UniStarAtm";
import { useState } from "react";

const Test = () => {
  const [count, setCount] = useState(0);
  const [temp, setTemp] = useState(false)

  const handleSetCount = () => {
    if (count === 3) {
      setCount(count - 3);
    } else {
      setCount(count + 1);
    }
  };
  

  React.useEffect(() => {
    setTimeout(() => {
      
      setTemp(true)
    }, 1000);
  },[])

  React.useEffect(() => {
    
  },[count])

  return (
    <>

{temp ? <span onClick={handleSetCount}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.1,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          
            <UniStarAtm count={count} />
          
        </motion.div>
      </span>: <></>}

      <span onClick={handleSetCount}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.1,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          
            <UniStarAtm count={count} />
          
        </motion.div>
      </span>
    </>
  );
};

export default Test;
