import styled from "@emotion/styled";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import ChatTmp from "../../components/chat/ChatTmp";

import FooterTmp from "../../components/common/tmp/FooterTmp";
import TopTmp from "../../components/common/tmp/TopTmp";
import { NotiUtils } from "../../lib/utils/NotiUtils";
import { TokenState } from "../../states/recoil/TokenState";

const ChatStyle = styled.div`
  width: 100vw;
  overflow: hidden;
`;

function index() {

  const token = useRecoilValue(TokenState).token
  const [tempCnt, setTempCnt] = useState(0)

  const updateCount = async () => {
    const data = await NotiUtils.getNotiCount(token)
    setTempCnt(data?.count)
  }

  useEffect(() => {
    if(token){
      updateCount()
    }
  },[])

  return (
    <>
      <ChatStyle>
        <TopTmp type="chat" text={"채팅"} tempCnt={tempCnt}/>

        <ChatTmp />

        <FooterTmp />
      </ChatStyle>
    </>
  );
}

export default index;

