import axios from "axios";
export const LikeUtils = {
  postLike: (token: string, postId: string | number) => {
    //TODO - AWS 서버로 바꾸기
    axios
      .post(
        `${process.env.NEXT_PUBLIC_URL_AWS}/posts/cool`,
        { postId },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  },

  deleteLike: (token: string, postId: string | number) => {
    axios
      .delete(`${process.env.NEXT_PUBLIC_URL_AWS}/posts/cool`, {
        headers: {
          Authorization: token,
        },
        data: { postId },
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  },
};
