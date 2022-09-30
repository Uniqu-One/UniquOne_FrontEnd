import React, { Children, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";



function Paging(props: { children: ReactNode }) {

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ duration: 0.35 }}
      variants = {variants}
    >
      {props.children}
    </motion.div>
  );
}

export default Paging;
