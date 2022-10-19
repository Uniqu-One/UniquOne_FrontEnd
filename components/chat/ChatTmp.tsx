import styled from "@emotion/styled";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { chatListDataType } from "../../types/chat/chatListDataType";
import LoadingSpinnerAtm from "../common/atm/LoadingSpinnerAtm";

import ChatBoxMol from "./ChatBoxMol";
import ChatBoxSliderMol from "./ChatBoxSliderMol";
import ChatDeleteIconMol from "./ChatDeleteIconMol";

const ChatBoxMolStyle = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
`;

function ChatTmp() {
  const [chatRoomDatas, setChatRoomDatas] = useState<chatListDataType[]>([
    // {
    //   message: "hi",
    //   msgRegDate: "hi",
    // },
  ]);

  useEffect(() => {
    //비동기적으로 변경해야함
    setTimeout(() => {
      axios
        .get(process.env.NEXT_PUBLIC_URL_SY + "/chat", {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzeTQyMzUxM0BnbWFpbC5jb20iLCJpZCI6MSwibmlja05hbWUiOiLrsLDrtoDrpbjri6jrrLTsp4DsmYAzMyIsImVtYWlsIjoic3k0MjM1MTNAZ21haWwuY29tIiwicm9sZSI6IlJPTEVfVVNFUiIsImlhdCI6MTY2NjE0Nzc5MSwiZXhwIjoxNjY3MDExNzkxfQ.oAb6zW8DR6taLuPSOa5RArtVNR5r9KhFT4cvQKZRD1M",
          },
        })
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
                <ChatBoxSliderMol
                  key={idx}
                  idx={idx}
                  chatData={chatData}
                  handleOpenModal={handleOpenModal}
                />
              );
            })}
        </>
      </ChatBoxMolStyle>
    </>
  );
}

export default ChatTmp;
