import styled from "@emotion/styled";
import React, { ElementType, useEffect, useRef } from "react";
import useEvaIcon from "../../lib/hooks/useEvaIcon";
import { color } from "../../styles/theme";
import lottie from "lottie-web";

const PostSliderNextMolStyle = styled.div`
  /* background-color: red; */
  height: 400px;
  text-align: center;

  svg {
    fill: ${color.p_gray_md};
    width: 140px;
    height: 140px;
  }

  .arrow{
    margin-right: 24px;
  }
  .text{
    font-size: 0.875rem;
    color: ${color.p_gray_md};
  }
`;

function PostSliderNextMol() {


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
    <PostSliderNextMolStyle>
      <div ref={arrowCon} className="arrow">
      </div> 
      <div className="text">게시물 자세히 보기</div>
    </PostSliderNextMolStyle>
  );
}

export default PostSliderNextMol;
