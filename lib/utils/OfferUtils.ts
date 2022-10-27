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
        console.log(res);
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
        console.log(res);
        return res.data;
      })
      .catch((err) => {
        console.log(err);
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
        console.log(res);
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        return [];
      });
  },
  getMyDetailOffer: async (token:string,postId:string|number) => {

    await axios
      .get(`${process.env.NEXT_PUBLIC_URL_AWS}/offer/${postId}`, {
        headers: {
          Authorization: token,
        },
      }).then(res => {
        console.log(res)
        return true;
      })
        .catch(err => {
          console.error(err)
          return false;
        })

  }
};
