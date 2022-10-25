import axios from "axios";
export const CommentUtils = {
  getCommentList: async (token: string, postId: string) => {
    return await axios
      .get(`${process.env.NEXT_PUBLIC_URL_DK}/comment/${postId}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        // console.log(res.data)
        return res.data;
      })
      .catch((err) => console.error(err));
  },
  postParentComment: async (
    token: string,
    postId: string,
    inputText: string
  ) => {
    await axios
      .post(
        `${process.env.NEXT_PUBLIC_URL_DK}/comment`,
        {
          postId,
          content: inputText,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  },
  postChildComment: async (
    token: string,
    postId: string,
    parentId: number,
    inputText: string
  ) => {
    await axios
      .post(
        `${process.env.NEXT_PUBLIC_URL_DK}/comment`,
        {
          postId,
          parentId,
          content: inputText,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  },
  deleteMyComment: async (token: string, commentId: number) => {
    return await axios
      .delete(`${process.env.NEXT_PUBLIC_URL_DK}/comment/${commentId}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        // console.log(res)
        return true
      })
      .catch((err) => {
        // console.error(err)
        return false;
      });
  },
};
