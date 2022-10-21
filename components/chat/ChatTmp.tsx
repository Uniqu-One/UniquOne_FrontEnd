import styled from "@emotion/styled";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { chatListDataType } from "../../types/chat/chatListDataType";
import LoadingSpinnerAtm from "../common/atm/LoadingSpinnerAtm";
import ChatBoxSliderMol from "./ChatBoxSliderMol";
import ChatDeleteCofirmMol from "./ChatDeleteCofirmMol";
import ChatRoomNoneMol from "./ChatRoomNoneMol";

const ChatBoxMolStyle = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
`;

function ChatTmp() {
  const [chatRoomDatas, setChatRoomDatas] = useState<chatListDataType[]>([]);
  const [selectedRoomId, setSelectedRoomId] = useState()
  const [isNone, setIsNone] = useState(false)

  useEffect(() => {
    //TODO - 비동기적으로 변경해야함
    setTimeout(() => {
      axios
        .get(process.env.NEXT_PUBLIC_URL_AWS + "/chat", {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzeTQyMzUxM0BnbWFpbC5jb20iLCJpZCI6MSwibmlja05hbWUiOiLrsLDrtoDrpbjri6jrrLTsp4DsmYAzMyIsImVtYWlsIjoic3k0MjM1MTNAZ21haWwuY29tIiwicm9sZSI6IlJPTEVfVVNFUiIsImlhdCI6MTY2NjMyODAzOSwiZXhwIjoxNjY3MTkyMDM5fQ.I-eOma46WXgk2hzdyCLNAhyrX-PixTMpwYSz2bQR5pM",
          },
        })
        .then((res) => {
          return setChatRoomDatas([...res.data.data]);
        })
        .catch((err) => {
          console.error(err);
          setIsNone(true)
        });
    }, 100);
  }, []);

  const [deleteCofirmModal, setDeleteCofirmModal] = useState(false);

  const handleOpenModal = () => {
    setDeleteCofirmModal(true);
  };


  if(isNone){
    return <ChatRoomNoneMol/>
  }


  return (
    <>
      <AnimatePresence>
        {deleteCofirmModal && (
          <motion.div
            style={{
              position: "absolute",
              width: "100vw",
              height: "100vh",
              backgroundColor: "#0000007a",
              zIndex: 10,
              top: 0,
              left: 0,
            }}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <ChatDeleteCofirmMol setDeleteCofirmModal={setDeleteCofirmModal} selectedRoomId={selectedRoomId}/>
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
                  setSelectedRoomId={setSelectedRoomId}
                />
                
              );
            })}
        </>
      </ChatBoxMolStyle>
    </>
  );
}

export default ChatTmp;
