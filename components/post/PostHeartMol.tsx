import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import PostHeartAtm from "./PostHeartAtm";
import PostHeartFillAtm from "./PostHeartFillAtm";
import { AnimatePresence, motion } from "framer-motion";
import SignupFormAnimation from "../animation/SignupFormAnimation";
import HeartToggleAnimation from "../animation/HeartToggleAnimation";
import { LikeUtils } from "../../lib/utils/LikeUtils";
import { useRecoilValue } from "recoil";
import { TokenState } from "../../states/recoil/TokenState";
import { UserInfoState } from "../../states/recoil/UserInfoState";
import { ToastUtils } from "../common/tmp/ToastTmp";

function PostHeartMol(props: { postId: string | number, isCool:boolean }) {
  const {postId, isCool} = props
  const token = useRecoilValue(TokenState).token;
  const [tempHeart, setTempHeart] = useState(isCool);

  const userId = useRecoilValue(UserInfoState).userId

  const handleChangeTempHeart = () => {

    if(userId === undefined || userId === null){
      ToastUtils.toast('로그인 후 이용 가능한 기능입니다.')
      return;
    }

    if (tempHeart) {
      LikeUtils.deleteLike(token, props.postId);
    } else {
      LikeUtils.postLike(token, props.postId);
    }

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
