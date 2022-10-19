import { useQuery } from "react-query";
import axios from "axios";

export const ChatUtils = {
  // receiveChatRoomList: () => {
  //   const fetchChatRoomList = () => {
  //     axios.get(process.env.NEXT_PUBLIC_URL_SY + "/chat", {
  //       headers: {
  //         Authorization:
  //           "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzeTQyMzUxM0BnbWFpbC5jb20iLCJpZCI6MSwibmlja05hbWUiOiLrsLDrtoDrpbjri6jrrLTsp4DsmYAzMyIsImVtYWlsIjoic3k0MjM1MTNAZ21haWwuY29tIiwicm9sZSI6IlJPTEVfVVNFUiIsImlhdCI6MTY2NjE0Nzc5MSwiZXhwIjoxNjY3MDExNzkxfQ.oAb6zW8DR6taLuPSOa5RArtVNR5r9KhFT4cvQKZRD1M",
  //       },
  //     });
  //   };
  //   const { isLoading, data } = useQuery("receiveRoom", fetchChatRoomList, {
  //     staleTime: 5000,
  //     refetchOnWindowFocus: false,
  //     select: (data) => {
  //       const userData = data;
  //       return userData;
  //     },
  //   });
  //   return data;
  // },
};
