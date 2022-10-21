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
              "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzeTQyMzUxM0BnbWFpbC5jb20iLCJpZCI6MSwibmlja05hbWUiOiLrsLDrtoDrpbjri6jrrLTsp4DsmYAzMyIsImVtYWlsIjoic3k0MjM1MTNAZ21haWwuY29tIiwicm9sZSI6IlJPTEVfVVNFUiIsImlhdCI6MTY2NjMyODAzOSwiZXhwIjoxNjY3MTkyMDM5fQ.I-eOma46WXgk2hzdyCLNAhyrX-PixTMpwYSz2bQR5pM",
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
