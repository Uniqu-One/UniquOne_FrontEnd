import { GetServerSideProps } from "next";
import React from "react";
import ChatRoomTmp from "../../components/chat/ChatRoomTmp";

function RoomId(props:{roomId:string}) {


  return (
    <>
      <>
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
