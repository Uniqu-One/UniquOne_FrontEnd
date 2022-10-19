import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { chatListDataType } from "../../types/chat/chatListDataType";
import ChatBoxMol from "./ChatBoxMol";
import ChatDeleteIconMol from "./ChatDeleteIconMol";

function ChatBoxSliderMol(props: {
  chatData: chatListDataType;
  idx: number;
  handleOpenModal: Function;
}) {

  const {chatData,idx,handleOpenModal} = props

  const sliderRef = useRef(null);
  const [temp, setTemp] = useState(0);
  const settings = {
    dots: false,
    infinite: false,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 0.15,

    afterChange: (current: number) => {
      setTemp(current);
    },
  };

  useEffect(() => {
    if (temp > 0.15) {
      setTimeout(() => {
        // @ts-ignore
        // TODO - 타입은 추론가능하나, 이후에 수정 필요
        sliderRef?.current?.slickGoTo(0);
      }, 10);
    }
  }, [temp, sliderRef.current]);

  return (
    <>
      <Slider ref={sliderRef} {...settings} key={idx}>
        <ChatBoxMol key={chatData.chatRoomId} chatData={chatData} />
        <ChatDeleteIconMol handleOpenModal={handleOpenModal} />
      </Slider>
    </>
  );
}

export default ChatBoxSliderMol;
