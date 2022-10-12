import React, { Children, ReactNode } from "react";
import { motion } from "framer-motion";

function HeartToggleAnimation(props: { children: ReactNode }) {
  return (
    <motion.div
      animate={{ scale: 1, opacity: 1 }}
      initial={{ scale:1.1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      style={{width:"24px"}}
    >
      {props.children}
    </motion.div>
  );
}

export default HeartToggleAnimation;
