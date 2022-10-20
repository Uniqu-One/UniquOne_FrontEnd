import { useQuery } from "react-query";

import axios from "axios";

export const QnaUtils = {

  getMyQna: (token: string) => {
    const fetchQnaData = () => {
      return axios.get(`${process.env.NEXT_PUBLIC_URL_SY}/qna`, {
        headers: {
          Authorization: token,
        },
      });
    };

    const { data } = useQuery("getMyQna", fetchQnaData, {
      select: (data) => {
        console.log(data);
        return data;
      },
    });
    return data;
  },
  postMyQna: async (token: string, qnaData: { type: string; desc: string }) => {
    const { type, desc } = qnaData;

    const newPostQnaData = { question: "", questionType: "" };
    newPostQnaData.question = desc;
    newPostQnaData.questionType = type;

    return await axios
      .post(`${process.env.NEXT_PUBLIC_URL_SY}/qna`, newPostQnaData, {
        headers: {
          Authorization:
            token
        },
      })
      .then((res) => {
        return true;
      })
      .catch((err) => {
        console.error(err);
        return false;
      });
  },
};
