import styled from "@emotion/styled";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ChatTmp from "../../components/chat/ChatTmp";
import FooterTmp from "../../components/common/tmp/FooterTmp";
import TopTmp from "../../components/common/tmp/TopTmp";

const ChatStyle = styled.div`
  width: 100vw;
  overflow: hidden;
`;

function index() {

  return (
    <>
      <ChatStyle>
        <TopTmp type="chat" text={"채팅"} />

        <ChatTmp />

        <FooterTmp />
      </ChatStyle>
    </>
  );
}

export default index;

