import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import PostHeartAtm from "./PostHeartAtm";
import PostHeartFillAtm from "./PostHeartFillAtm";
import { AnimatePresence, motion } from "framer-motion";
import SignupFormAnimation from "../animation/SignupFormAnimation";
import HeartToggleAnimation from "../animation/HeartToggleAnimation";

const PostHeartMolStyle = styled.div``;

function PostHeartMol() {
  const [tempHeart, setTempHeart] = useState(false);

  const handleChangeTempHeart = () => {
    setTempHeart((prev) => {
      return !prev;
    });
  };

  return (
    <>
      <AnimatePresence>
        <div onClick={() => handleChangeTempHeart()}>
          {tempHeart ? (
            <HeartToggleAnimation key="true">
              <PostHeartFillAtm />
            </HeartToggleAnimation>
          ) : (
            <HeartToggleAnimation key="false">
              <PostHeartAtm />
            </HeartToggleAnimation>
          )}
        </div>
      </AnimatePresence>
    </>
  );
}

export default PostHeartMol;
