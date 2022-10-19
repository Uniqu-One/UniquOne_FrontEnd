import axios from "axios";

export const TradeUtils = {

  tradeOver: async (buyerId: number, postId: number) => {
    return await axios
      .post(
        `${process.env.NEXT_PUBLIC_URL_SY}/trade`,
        {
          buyerId,
          postId,
        },
        {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzeTQyMzUxM0BnbWFpbC5jb20iLCJpZCI6MSwibmlja05hbWUiOiLrsLDrtoDrpbjri6jrrLTsp4DsmYAzMyIsImVtYWlsIjoic3k0MjM1MTNAZ21haWwuY29tIiwicm9sZSI6IlJPTEVfVVNFUiIsImlhdCI6MTY2NjEzODgyNywiZXhwIjoxNjY3MDAyODI3fQ.VM72zMo9FLLU1xdfWu4pmoGpr5D20IE9Ma1sV-W4P-s",
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          return true;
        }
      })
      .catch((err) => {
        console.error(err);
        return false;
      });
  },
};
