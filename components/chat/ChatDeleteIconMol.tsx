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

function ChatDeleteIconMol(props:{handleOpenModal:Function}) {

  useEvaIcon();
  return (
    <>
        <ChatDeleteIconMolStyle >
          <div onClick={() => props.handleOpenModal(true)}>
            <i data-eva="trash-outline"></i>
          </div>
        </ChatDeleteIconMolStyle>
      
    </>
  );
}

export default ChatDeleteIconMol;
