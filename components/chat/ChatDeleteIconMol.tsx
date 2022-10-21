import styled from "@emotion/styled";
import React from "react";
import useEvaIcon from "../../lib/hooks/useEvaIcon";
import { color } from "../../styles/theme";

const ChatDeleteIconMolStyle = styled.div`
  background-color: ${color.p_gray_md};
  height: 76px;
  div {
    fill: white;
    padding-left: 4.5vw;
    padding-top: 24px;
  }


`;

function ChatDeleteIconMol(props:{handleOpenModal:Function, setSelectedRoomId:Function, roomId?:string}) {

  useEvaIcon();
  const {handleOpenModal,setSelectedRoomId,roomId} =props


  const handleOpenDeleteModal = () => {
    handleOpenModal(true)
    setSelectedRoomId(roomId)
  }

  return (
    <>
        <ChatDeleteIconMolStyle >
          <div onClick={() => handleOpenDeleteModal()}>
            <i data-eva="trash-outline"></i>
          </div>
        </ChatDeleteIconMolStyle>
      
    </>
  );
}

export default ChatDeleteIconMol;
