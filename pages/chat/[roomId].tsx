import { useRouter } from "next/router";
import React from "react";
import ChatRoomTmp from "../../components/chat/ChatRoomTmp";
import TopTmp from "../../components/common/tmp/TopTmp";

function RoomId() {
  const route = useRouter();
  console.log(route.query.roomId);

  return (
    <>
      {route.query.roomId && (
        <>
          <TopTmp text="Strong_Minsu" />
          <ChatRoomTmp />
        </>
      )}
    </>
  );
}

export default RoomId;
