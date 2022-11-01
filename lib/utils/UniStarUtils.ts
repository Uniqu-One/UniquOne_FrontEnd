import axios from "axios";

export const UniStarUtils = {
  enrollUniStar: (token: string, postId: string | number) => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_URL_AWS}/unistar/${postId}`,
        {},
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  },
  pathchUniStar: (
    token: string,
    postId: string | number,
    level: string | number
  ) => {
    axios
      .patch(
        `${process.env.NEXT_PUBLIC_URL_AWS}/unistar/${postId}`,
        { level },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  },
  deleteUniStar: (token: string, postId: string | number) => {
    axios
      .delete(`${process.env.NEXT_PUBLIC_URL_AWS}/unistar/${postId}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  },
  getMyUniStarList: async (token: string) => {
    return await axios
      .get(`${process.env.NEXT_PUBLIC_URL_AWS}/unistar/all`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        return res.data.data.result
      })
      .catch((err) => console.error(err));
  },
};
