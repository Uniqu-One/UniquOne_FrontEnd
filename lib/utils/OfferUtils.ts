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
  getMyCornOfferList: async (token: string) => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_URL_AWS}/offer/corn`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
