import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ChatRoomTmp from "../../components/chat/ChatRoomTmp";
import TopTmp from "../../components/common/tmp/TopTmp";



function RoomId() {

  return (
    <>
  
        <>
          <TopTmp text="Strong_Minsu" />
          <ChatRoomTmp/>
        </>
  
    </>
  );
}

export default RoomId;