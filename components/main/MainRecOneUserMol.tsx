import styled from "@emotion/styled";
import Lottie from "lottie-web";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import { color } from "../../styles/theme";

const MainRecOneUserMolStyle = styled.div`
position: relative;
  border-radius: 9px;
  width: 100%;
  height: 162px;
  background-color: white;

  text-align: center;

  > div {
    img {
      border-radius: 6px;
    }

    :nth-of-type(2) {
      padding-top: 18px;
      padding-bottom: 6px;
      /* background-color: red; */
    }
  }

  p {
    display: inline-block;
    width: 216px;
    color: ${color.p_gray_md};
    font-weight: 600;
    line-height: 1.3;
  }


  .user_icon{
    img{
      border-radius: 100%;
      border: 1px solid ${color.p_gray_lt};
    }
  }

  .confetti{
    position: absolute;
    text-align: center;
    margin: auto;
    width: 100%;
    height: 138px;
  }
`;

function MainRecOneUserMol() {
  const router = useRouter()

  const fonfettiRef = useRef(null)

  
useEffect(() => {

  if (fonfettiRef.current)
  Lottie.loadAnimation({
    container: fonfettiRef.current,
    renderer: "svg",
    loop: true,
    autoplay: true,
    animationData: require("../../public/assets/images/animation/confetti.json"),
  });

},[])


  return (
    <>
      <MainRecOneUserMolStyle onClick={() => router.push('/profile/1')} >
        <div className="confetti" ref={fonfettiRef}></div>
        <div className="user_icon">
          <img  
            src="https://uniquoneimg.s3.ap-northeast-2.amazonaws.com/img/01b7e0b9-ed4a-401c-83c1-87c7d5ca2769homed77750b5-8db9-4637-a472-834a1c18cade.jpeg"
            alt="더미 유저 이미지"
            width="78px"
            height="78px"
          />
        </div>

        <div className="user">
          <p>떼굴떼굴 샵</p>
          <p>떼굴떼굴 모든것을 팝니다.</p>
        </div>
      </MainRecOneUserMolStyle>
    </>
  );
}

export default MainRecOneUserMol;
