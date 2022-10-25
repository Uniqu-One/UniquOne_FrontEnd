import { useQuery } from "react-query";
import axios from "axios";

export const ChatUtils = {
  exitChatRoom: async (token: string, chatRoomId?: string) => {
    return await axios
      .patch(
        `${process.env.NEXT_PUBLIC_URL_AWS}/chat/room`,
        { chatRoomId },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        console.log(res);
        return true;
      })
      .catch((err) => {
        console.error(err);
        return false;
      });
  },
  presentChat: async (token: string, postId: string | number) => {
    //userId 받아야함,

    return await axios
      .post(
        `${process.env.NEXT_PUBLIC_URL_AWS}/chat/room`,
        {
          postId,
          receiverId: 1,
          chatType: "BUYER",
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        console.log(res.data.data)
        return res.data.data.id
      })
      .catch((err) => console.error(err));
  },
};
