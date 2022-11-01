import { GetServerSideProps } from "next";
import React from "react";
import ChatRoomTmp from "../../components/chat/ChatRoomTmp";
import TopTmp from "../../components/common/tmp/TopTmp";

function RoomId(props:{roomId:string}) {


  return (
    <>
      <>
        <TopTmp text="Strong_Minsu" />
        <ChatRoomTmp roomId={props.roomId}/>
      </>
    </>
  );
}

export default RoomId;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { roomId } = query;

  return {
    props: {
      roomId,
    },
  };
};
