import React, { useEffect, useState } from "react";
import UniStarAtm from "../atm/UniStarAtm";
import { AnimatePresence, motion } from "framer-motion";

function UniStarMol() {
  const [count, setCount] = useState(0);

  //TODO - useEffect로 현재 star의 값 받아와야함
  //TODO - 약간 잔상 남는 버그 해결해야함

  const handleSetCount = () => {
    if (count === 3) {
      setCount(count - 3);
    } else {
      setCount(count + 1);
    }
  };

  useEffect(() => {}, [count]);
  return (
    <>
      <AnimatePresence>
        <span onClick={handleSetCount}>
          <motion.div
            key={count}
            animate={{ rotate: -120, opacity: 1 }}
            style={{ width: "24px" }}
            initial={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <UniStarAtm count={count} />
          </motion.div>
        </span>
      </AnimatePresence>
    </>
  );
}

export default UniStarMol;
