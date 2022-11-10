import { useQuery } from "react-query";
import axios from "axios";
export const OfferUtils = {
  postOffer: async (
    token: string,
    postId: string | number,
    offerPrice: number | string
  ) => {
    return await axios
      .post(
        `${process.env.NEXT_PUBLIC_URL_AWS}/offer`,
        { postId, price: offerPrice },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        ;
        return true;
      })
      .catch((err) => {
        console.error(err);
        return false;
      });
  },

  getMySuggestOfferList: async (token: string) => {
    return await axios
      .get(`${process.env.NEXT_PUBLIC_URL_AWS}/offer`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        ;
        return res.data.data;
      })
      .catch((err) => {
        // console.log(err);
        return [];
      });
  },
  getMyCornOfferList: async (token: string) => {
    return await axios
      .get(`${process.env.NEXT_PUBLIC_URL_AWS}/offer/corn`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        // console.log(res.data.data);
        return res.data.data;
      })
      .catch((err) => {
        // console.log(err);
        return [];
      });
  },
  getMyDetailOffer: (token: string, postId: string | number) => {
    const fetchMyDetailOffer = () => {
      return axios.get(
        `${process.env.NEXT_PUBLIC_URL_AWS}/offer/corn/${postId}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
    };

    const { data, isLoading } = useQuery(
      "myDetailOfferQuery",
      fetchMyDetailOffer
    );

    if (isLoading) {
      return "Loading";
    }

    return data?.data.data;
  },
  checkCornOffer: async (
    token: string,
    offerId: string | number,
    offerType: string
  ) => {

    // console.log(token,offerId,offerType)
    return await axios
      .patch(
        `${process.env.NEXT_PUBLIC_URL_AWS}/offer`,
        {
          offerId,
          offerType,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        
        return true;
      })
      .catch((err) => {
        console.error(err)
        return false;
      });
  },
};
