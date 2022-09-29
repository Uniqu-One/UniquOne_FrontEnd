
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const variants = {
  visible: { opacity: 1, transition: { duration: 3 } },
  hidden: { opacity: 0 }
};

// export const BoxStyled = styled(motion.div).attrs(() => ({
//   initial: "hidden",
//   variants
// }))`
//   display: flex;
// `;

export const BoxStyled = styled(motion.div, {
  initial:"hidden",
  variants
})