import { useQuery } from "react-query";
import axios from "axios";

export const TradeUtils = {
  tradeOver: async (
    token: string,
    userId?: number | string,
    postId?: number | string
  ) => {
    return await axios
      .post(
        `${process.env.NEXT_PUBLIC_URL_AWS}/trade`,
        {
          buyerId: userId,
          postId,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          return true;
        } else {
          return false;
        }
      })
      .catch((err) => {
        console.error(err);
        return false;
      });
  },

  getPurchaseList: (token: string) => {
    const fetchPruchaseListData = () => {
      return axios.get(`${process.env.NEXT_PUBLIC_URL_AWS}/trade/buy`, {
        headers: {
          Authorization: token,
        },
      });
    };

    const { isLoading, data, isError, error } = useQuery(
      "purchaselistData",
      fetchPruchaseListData,
      {
        select: (data) => {
          // console.log(data)
          return data.data.data;
        },
      }
    );

    return data;
  },

  getSellList: (token: string) => {
    const fetchSellListData = () => {
      return axios.get(`${process.env.NEXT_PUBLIC_URL_AWS}/trade/sell`, {
        headers: {
          Authorization: token,
        },
      });
    };

    const { isLoading, data, isError, error } = useQuery(
      "sellListData",
      fetchSellListData,
      {
        select: (data) => {
          return data.data.data;
        },
      }
    );

    return data;
  },
};
