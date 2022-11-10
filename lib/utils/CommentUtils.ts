import axios from "axios";
export const CommentUtils = {
  getCommentList: async (token: string, postId: string) => {
    return await axios
      .get(`${process.env.NEXT_PUBLIC_URL_AWS}/comment/${postId}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
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
        `${process.env.NEXT_PUBLIC_URL_AWS}/comment`,
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
        `${process.env.NEXT_PUBLIC_URL_AWS}/comment`,
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
      .delete(`${process.env.NEXT_PUBLIC_URL_AWS}/comment/${commentId}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(commentId)
        console.log(res)
        if(res.data.data === null){return false}
        
        return true
      })
      .catch((err) => {
        return false;
      });
  },
};
