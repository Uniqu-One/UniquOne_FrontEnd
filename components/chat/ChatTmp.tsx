import styled from "@emotion/styled";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { chatListDataType } from "../../types/chat/chatListDataType";
import LoadingSpinnerAtm from "../common/atm/LoadingSpinnerAtm";
import ChatBoxMol from "./ChatBoxMol";
import ChatDeleteIconMol from "./ChatDeleteIconMol";

const ChatBoxMolStyle = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
`;

function ChatTmp() {
  const [chatRoomDatas, setChatRoomDatas] = useState<chatListDataType[]>([]);

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
  const [deleteCofirmModal, setDeleteCofirmModal] = useState(false);

  const handleOpenModal = () => {
    setDeleteCofirmModal(true);
  };

  return (
    <>
      <AnimatePresence>
        {deleteCofirmModal && (
          <motion.div
            style={{
              width: "100vw",
              height: "100vh",
              borderRadius: 15,
              backgroundColor: "lightblue",

              zIndex: 2000,
              bottom: 0,
              left: 0,
            }}
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <div>modalalal</div>
          </motion.div>
        )}
      </AnimatePresence>

      <ChatBoxMolStyle>
        <>
          {chatRoomDatas[0] === undefined && <LoadingSpinnerAtm />}

          {chatRoomDatas &&
            chatRoomDatas.map((chatData, idx) => {
              return (
                <Slider ref={sliderRef} {...settings} key={idx}>
                  <ChatBoxMol key={chatData.chatRoomId} chatData={chatData} />
                  <ChatDeleteIconMol handleOpenModal={handleOpenModal} />
                </Slider>
              );
            })}
        </>
      </ChatBoxMolStyle>
    </>
  );
}

export default ChatTmp;
