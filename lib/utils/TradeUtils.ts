import { useQuery } from "react-query";
import axios from "axios";

export const TradeUtils = {
  tradeOver: async (buyerId: number, postId: number) => {
    return await axios
      .post(
        `${process.env.NEXT_PUBLIC_URL_AWS}/trade`,
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
  getPurchaseList: () => {
    
    const fetchPruchaseListData = () => {
      return axios.get(`${process.env.NEXT_PUBLIC_URL_SY}/trade/buy`, {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzeTQyMzVAZ21haWwuY29tIiwiaWQiOjIsIm5pY2tOYW1lIjoi66mL7KeEIOycoOuLiOy9mOuTpCIsImVtYWlsIjoic3k0MjM1QGdtYWlsLmNvbSIsInJvbGUiOiJST0xFX1VTRVIiLCJpYXQiOjE2NjYyMjY2NzAsImV4cCI6MTY2NzA5MDY3MH0.BP4sX3hZL6hjeZPu94FfcxjBeCSatmF4gHKAz-s3xUg",
        },
      })
    };

    const { isLoading, data, isError, error } = useQuery(
      "purchaselistData",
      fetchPruchaseListData,{
        select: (data) => {  
          return data.data.data;
        },
      }
    );

      return data;
    
  },

  getSellList: () => {
    
    const fetchSellListData = () => {
      return axios.get(`${process.env.NEXT_PUBLIC_URL_SY}/trade/sell`, {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzeTQyMzVAZ21haWwuY29tIiwiaWQiOjIsIm5pY2tOYW1lIjoi66mL7KeEIOycoOuLiOy9mOuTpCIsImVtYWlsIjoic3k0MjM1QGdtYWlsLmNvbSIsInJvbGUiOiJST0xFX1VTRVIiLCJpYXQiOjE2NjYyMjY2NzAsImV4cCI6MTY2NzA5MDY3MH0.BP4sX3hZL6hjeZPu94FfcxjBeCSatmF4gHKAz-s3xUg",
        },
      })
    };

    const { isLoading, data, isError, error } = useQuery(
      "selListData",
      fetchSellListData,{
        select: (data) => {  
          return data.data.data;
        },
      }
    );

      return data;
    
  },

};
