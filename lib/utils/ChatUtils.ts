import { useQuery } from "react-query";
import axios from "axios";

export const ChatUtils = {
  exitChatRoom: async (token: string, chatRoomId?: string) => {
    return await axios
      .patch(
        `${process.env.NEXT_PUBLIC_URL_SY}/chat/room`,
        { chatRoomId },
        {
          headers: {
            Authorization:
              token,
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
};
