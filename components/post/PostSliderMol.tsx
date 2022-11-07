import styled from "@emotion/styled";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import useEvaIcon from "../../lib/hooks/useEvaIcon";
import { color } from "../../styles/theme";
import ToastTmp from "../common/tmp/ToastTmp";
import PostSliderNextMol from "./PostSliderNextMol";
import PostSliderPrevMol from "./PostSliderPrevMol";

const PostSliderMolStyle = styled.div`
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

  const queryPostId = router.query.postId

  const [settings, setSettings] = useState({
    beforeChange: (e: number) => {
      if (e === 0 && queryPostId === undefined) {
        router.push(`/post/${postId}`);
      }

    
    },

    afterChange: (e: number) => {
      if (e === 0 && queryPostId !== undefined) {
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
          <div>
            <img  
              src={postImgUrlList}
              alt="postdummy"
              width="100%"
              height="100%"
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
      <Slider {...settings}>
        <div>
            <PostSliderPrevMol/>
          </div>
        {postImgUrlList && postImgUrlList.map((img, idx) => {
          return (
            <div key={idx}>
              <img   src={img} alt="postdummy" width="100%" height="100%" />
            </div>
          );
        })}
      </Slider>
    </PostSliderMolStyle>
  );
}

export default PostSliderMol;
