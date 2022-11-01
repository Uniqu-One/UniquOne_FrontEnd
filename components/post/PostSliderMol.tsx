import styled from "@emotion/styled";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { color } from "../../styles/theme";
import ToastTmp from "../common/tmp/ToastTmp";

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
  const { postId, postImgUrlList } = props;

  const [settings, setSettings] = useState({
    beforeChange: (e: number) => {
      if (e === 0 && postId !== undefined) {
        router.push(`/post/${postId}`);
      }
    },

    dots: true,
    infinite: false,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    // initialSlide: postId ? 1 : 0,
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

  return (
    <PostSliderMolStyle>
      {router.query.postId ? <ToastTmp /> : <></>}
      <Slider {...settings}>
        {postImgUrlList.map((img, idx) => {
          return (
            <div key={idx}>
              <Image src={img} alt="postdummy" width={1000} height={1000} />
            </div>
          );
        })}
        <div></div>
      </Slider>
    </PostSliderMolStyle>
  );
}

export default PostSliderMol;
