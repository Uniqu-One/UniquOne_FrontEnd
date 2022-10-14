import styled from "@emotion/styled";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { chatListDataType } from "../../types/chat/chatListDataType";
import ChatBoxMol from "./ChatBoxMol";

const ChatBoxMolStyle = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;

  .ChatContainer {
    width: 100vw;
    overflow: scroll;
  }

  .ChatScrollerBox{
    /* display: flex;
    width: 110vw; */
    
  }

  .ChatBox {
    width: 100vw;
  }

  .delete_box {
    background-color: red;
    width: 50px;
  }
`;

function ChatTmp() {
  const [chatRoomDatas, setChatRoomDatas] = useState<chatListDataType[]>([]);

  useEffect(() => {
    //비동기적으로 변경해야함
    setTimeout(() => {
      axios
        .get(process.env.NEXT_PUBLIC_URL_SY + "/chat/1")
        .then((res) => {
          return setChatRoomDatas([...res.data.data]);
        })
        .catch((err) => console.error(err));
    }, 100);
  }, []);

  return (
    <>
      <ChatBoxMolStyle>
        {chatRoomDatas.map((chatData) => {
          return (
            <>
              <div className="ChatContainer">
                <div className="ChatScrollerBox">
                  <div className="ChatBox">
                    <ChatBoxMol key={chatData.chatRoomId} chatData={chatData} />
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </ChatBoxMolStyle>
    </>
  );
}

export default ChatTmp;
