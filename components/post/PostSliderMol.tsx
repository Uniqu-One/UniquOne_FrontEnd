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

function PostSliderMol(props: { postId: number }) {
  const router = useRouter();
  const postId = router.query.postId

  // TODO - 뒤로 슬라이드해도 이동되는 버그 수정하기

  const [settings, setSettings] = useState({
    beforeChange: (e: number) => {
      if (e === 0) {
        router.push(`/post/${props.postId}`);
      }
    },
    afterChange:(e:number) => {
      if(e===0){
        router.push(`/post`);
      }
    },

    dots: true,
    infinite: false,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: postId ? 1 : 0 ,
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
      {postId ? <ToastTmp/>: <></>}
      <Slider {...settings}>
        <div>
          <Image
            src="/assets/images/postImage.jpg"
            alt="postdummy"
            width={1000}
            height={1000}
          />
        </div>
        <div>
          <Image
            src="/assets/images/postImage.jpg"
            alt="postdummy"
            width={1000}
            height={1000}
          />
        </div>
        <div>
          <Image
            src="/assets/images/postImage.jpg"
            alt="postdummy"
            width={1000}
            height={1000}
          />
        </div>
      </Slider>
    </PostSliderMolStyle>
  );
}

export default PostSliderMol;
