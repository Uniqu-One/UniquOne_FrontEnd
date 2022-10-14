import React, { useEffect, useState } from "react";
import UniStarAtm from "../atm/UniStarAtm";
import { AnimatePresence, motion } from "framer-motion";

function UniStarMol() {
  const [count, setCount] = useState(0);

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
