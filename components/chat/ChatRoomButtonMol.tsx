import { useState } from "react";
import { motion, Variants } from "framer-motion";
import styled from "@emotion/styled";
import useEvaIcon from "../../lib/hooks/useEvaIcon";
import { color } from "../../styles/theme";

const MENU = ["판매 중", "거래 중", "판매완료"];

//TODO - 리팩토링 필요

const ButtonStyle = styled.div<{ tempMenu: string }>`
  > div {
    /* text-align: center; */
    width: 96px;
    height: 32px;
    line-height: 32px;
    display: flex;
    justify-content: space-between;
    background-color: ${(props) =>
      props.tempMenu === "판매 중"
        ? color.p_pruple
        : props.tempMenu === "거래 중"
        ? "white"
        : color.p_gray_md};

    border: none;
    font-size: 0.875rem;
    color: ${(props) =>
      props.tempMenu === "판매 중"
        ? "white"
        : props.tempMenu === "거래 중"
        ? color.p_pruple
        : "white"};
    border-radius: 9px;
    fill: ${(props) =>
      props.tempMenu === "판매 중"
        ? "white"
        : props.tempMenu === "거래 중"
        ? color.p_pruple
        : "white"};
    border: ${(props)=> props.tempMenu === "거래 중" && `0.5px solid ${color.p_pruple}`};
    div {
      margin: auto 0;
      :first-of-type {
        margin-left: 12px;
      }
      :last-of-type {
        margin-right: 12px;
      }
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: {
    opacity: 0,
    y: 10,
    transition: { type: "spring", stiffness: 300, damping: 24, duration: 0.2 },
  },
};

const BoxStyle = styled.div`
  width: 96px;
  height: 32px;
  line-height: 32px;
  border: 0.5px solid ${color.p_gray_md};
  text-align: center;
  margin: auto 0;
  border-radius: 6px;
  font-size: 0.875rem;
  color: ${color.p_gray_dk};
  background-color: white;
`;

const Box = (props: { text: string }) => {
  return <BoxStyle>{props.text}</BoxStyle>;
};

export default function ChatRoomButtonMol() {
  useEvaIcon();
  const [tempMenu, setTempMenu] = useState(MENU[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSetTempMenu = (menu: string) => {
    setTempMenu(menu);
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="menu"
      >
        <ButtonStyle tempMenu={tempMenu}>
          <motion.div
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div>
              <p>{tempMenu}</p>
            </div>
            <motion.div
              variants={{
                open: { rotate: 90, originY: 0.5 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.2 }}
              style={{ height: "20px" }}
            >
              <i data-eva="arrow-ios-forward-outline"></i>
            </motion.div>
          </motion.div>
        </ButtonStyle>
        <motion.ul
          variants={{
            open: {
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.1,
                delayChildren: 0.1,
                staggerChildren: 0.05,
              },
            },
            closed: {},
          }}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
          {MENU.map((menu) => {
            return (
              <motion.li
                variants={itemVariants}
                key={menu}
                onClick={() => handleSetTempMenu(menu)}
              >
                <Box text={menu} />
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.nav>
    </>
  );
}
