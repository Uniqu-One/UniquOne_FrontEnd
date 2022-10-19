import axios from "axios";

export const TradeUtils = {
  tradeOver: () => {
    axios.post(`${process.env.NEXT_PUBLIC_URL_AWS}/trade`, {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzeTQyMzUxM0BnbWFpbC5jb20iLCJpZCI6MSwibmlja05hbWUiOiLrsLDrtoDrpbjri6jrrLTsp4DsmYAzMyIsImVtYWlsIjoic3k0MjM1MTNAZ21haWwuY29tIiwicm9sZSI6IlJPTEVfVVNFUiIsImlhdCI6MTY2NjEzODgyNywiZXhwIjoxNjY3MDAyODI3fQ.VM72zMo9FLLU1xdfWu4pmoGpr5D20IE9Ma1sV-W4P-s",
      },
    });
  },
};
