import styled from "@emotion/styled";
import React, { ElementType, useEffect, useRef } from "react";
import useEvaIcon from "../../lib/hooks/useEvaIcon";
import { color } from "../../styles/theme";
import lottie from "lottie-web";

const PostSliderPrevMolStyle = styled.div`
  /* background-color: red; */
  height: 400px;
  text-align: center;

  svg {
    fill: ${color.p_gray_md};
    width: 140px;
    height: 140px;
  }

  .arrow{
    margin-left: 24px;
    transform: rotateY(180deg);
  }
  .text{
    font-size: 0.875rem;
    color: ${color.p_gray_md};
  }
`;

function PostSliderPrevMol() {


  const arrowCon = useRef(null);

  useEffect(()=>{
    if(arrowCon.current)
    lottie.loadAnimation({
      container: arrowCon.current,
      renderer: 'svg',
      loop: true,
      autoplay:true,
      animationData:require("../../public/assets/images/animation/rightArrow.json")
     
    })
  
  },[])

  useEvaIcon();
  return (
    <PostSliderPrevMolStyle>
      <div ref={arrowCon} className="arrow">
      </div> 
      <div className="text">이전 페이지로 돌아가기</div>
    </PostSliderPrevMolStyle>
  );
}

export default PostSliderPrevMol;
