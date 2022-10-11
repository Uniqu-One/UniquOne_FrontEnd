import React, { Children, ReactNode } from "react";
import { motion } from "framer-motion";

function SignupFormAnimation(props: { children: ReactNode }) {
  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {props.children}
    </motion.div>
  );
}

export default SignupFormAnimation;
