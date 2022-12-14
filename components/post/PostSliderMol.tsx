import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useRecoilValue } from "recoil";
import useEvaIcon from "../../lib/hooks/useEvaIcon";
import { UserInfoState } from "../../states/recoil/UserInfoState";
import { color } from "../../styles/theme";
import ToastTmp, { ToastUtils } from "../common/tmp/ToastTmp";
import PostSliderNextMol from "./PostSliderNextMol";
import PostSliderPrevMol from "./PostSliderPrevMol";

const PostSliderMolStyle = styled.div`

  width: 100vw;
  height: 100vw;

  
  .container{
    img{
      width: 100vw;
      height: 100vw;
    }
  }

  .dots_custom {
    display: inline-block;
    vertical-align: middle;
    margin: auto 0;
    padding: 0;
  }

  .dots_custom li {
    list-style: none;
    cursor: pointer;
    display: inline-block;
    margin: 0 2px;
    padding: 0;
  }

  .dots_custom li button {
    border: none;
    background: ${color.p_gray_lt};
    color: transparent;
    cursor: pointer;
    display: block;
    height: 6px;
    width: 6px;
    border-radius: 100%;
    padding: 0;
  }

  .dots_custom li.slick-active button {
    background-color: ${color.p_pruple};
  }


  
`;

function PostSliderMol(props: { postId: number | string; postImgUrlList: [] }) {
  const router = useRouter();
  useEvaIcon()
  const { postId, postImgUrlList } = props;
  const userId = useRecoilValue(UserInfoState).userId

  const queryPostId = router.query.postId

  const [settings, setSettings] = useState({
    beforeChange: (e: number) => {

      if (e === 0 && queryPostId === undefined) {
        if(userId === undefined){
          ToastUtils.comment("디테일 확인은 로그인 후에 가능합니다. ","/intro")
          return ;
        }
        router.push(`/post/${postId}`);
      }

    
    },

    afterChange: (e: number) => {
      
      if (e === 0 && queryPostId !== undefined) {
        if(userId === undefined){
          return ;
        }
        router.back();
      }
    },

    dots: true,
    infinite: false,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: queryPostId ? 1 : 0,
    appendDots: (dots: any) => {
      return (
        <div
          style={{
            width: "100%",
            position: "absolute",
            bottom: "-40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ul> {dots} </ul>
        </div>
      );
    },
    dotsClass: "dots_custom",
  });


  if (typeof postImgUrlList === "string") {
    return (
      <PostSliderMolStyle>
        <Slider {...settings}>
          <div >
            <img  
              
              src={postImgUrlList}
              alt="postdummy"
              width="100%"
              height="380vw"
            />
          </div>
          <div>
            <PostSliderNextMol/>
          </div>
        </Slider>
      </PostSliderMolStyle>
    );
  }

  return (
    <PostSliderMolStyle>
      {router.query.postId ? <ToastTmp /> : <></>}
      <Slider {...settings} >
        <div >
            <PostSliderPrevMol/>
          </div >
        {postImgUrlList && postImgUrlList.map((img, idx) => {
          return (
            <div key={idx} className="container">
              <img className="slider_div" src={img} alt="postdummy" width="100%" height={`${100*(postImgUrlList.length+1)}vw`} />
            </div>
          );
        })}
      </Slider>
    </PostSliderMolStyle>
  );
}

export default PostSliderMol;
