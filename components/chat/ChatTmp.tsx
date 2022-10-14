import styled from "@emotion/styled";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import useEvaIcon from "../../lib/hooks/useEvaIcon";
import { color } from "../../styles/theme";
import { chatListDataType } from "../../types/chat/chatListDataType";
import ChatBoxMol from "./ChatBoxMol";

const ChatBoxMolStyle = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;

  .room_delete_icon {
    background-color: ${color.p_gray_md};
    height: 76px;
    div {
      fill: white;
      padding-left: 4.5vw;
      padding-top: 24px;
    }
  }
`;

function ChatTmp() {
  useEvaIcon();

  const [chatRoomDatas, setChatRoomDatas] = useState<chatListDataType[]>([
    { message: "테스트 메세지", msgRegDate: "N분전" },
  ]);

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
    console.log(temp);
    if (temp > 0.15) {
      console.log("큽니다.");
      setTimeout(() => {
        // @ts-ignore
        // TODO - 타입은 추론가능하나, 이후에 수정 필요
        sliderRef?.current?.slickGoTo(0.15);
      }, 8);
    }
  }, [temp, sliderRef.current]);

  useEffect(() => {
    //비동기적으로 변경해야함
    setTimeout(() => {
      axios
        .get(process.env.NEXT_PUBLIC_URL_AWS + "/chat/1")
        .then((res) => {
          return setChatRoomDatas([...res.data.data]);
        })
        .catch((err) => {
          console.error(err);
        });
    }, 100);
  }, []);

  return (
    <>
      <ChatBoxMolStyle>
        {chatRoomDatas.map((chatData) => {
          return (
            <>
              <Slider ref={sliderRef} {...settings}>
                <ChatBoxMol key={chatData.chatRoomId} chatData={chatData} />
                <div className="room_delete_icon">
                  <div>
                    {/* onClick 방 나가기 함수 붙이기 */}
                    <i data-eva="trash-outline"></i>
                  </div>
                </div>
              </Slider>
            </>
          );
        })}
      </ChatBoxMolStyle>
    </>
  );
}

export default ChatTmp;
