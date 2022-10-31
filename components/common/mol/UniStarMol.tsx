import React, { useEffect, useState } from "react";
import UniStarAtm from "../atm/UniStarAtm";
import { AnimatePresence, motion } from "framer-motion";

function UniStarMol(props:{tempStar:number,setTempStar:Function}) {
  const {tempStar,setTempStar} = props


  return (
    <>
      <AnimatePresence>
        <span>
          <motion.div
            key={tempStar}
            animate={{ rotate: -120, opacity: 1 }}
            style={{ width: "24px" }}
            initial={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <UniStarAtm count={tempStar} />
          </motion.div>
        </span>
      </AnimatePresence>
    </>
  );
}

export default UniStarMol;
