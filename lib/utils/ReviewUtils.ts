import { useQuery } from "react-query";
import axios from "axios";

export type reviewListType = {
  cornImg: string;
  dsc: string;
  postId: number;
  postImg: string;
  reviewId: number;
  reviewRegDate: string | null;
  star: number;
  userId: number;
  userNickName: string;
};

export const ReviewUtils = {
  getMyCornReview: (token: string) => {
    const fetchCornReviewListData = () => {
      return axios.get(`${process.env.NEXT_PUBLIC_URL_AWS}/reviews`, {
        headers: {
          Authorization: token,
        },
      });
    };

    const { isLoading, data, isError, error } = useQuery(
      "cornReviewListData",
      fetchCornReviewListData,
      {
        select: (data) => {
          //TODO - 작성 데이터 없을때 분기처리
          return data.data.data;
        },
      }
    );

    return data;
  },

  getMyWrittenReview: (token: string) => {
    const fetchWrittenReviewListData = () => {
      return axios.get(`${process.env.NEXT_PUBLIC_URL_AWS}/reviews/my`, {
        headers: {
          Authorization: token,
        },
      });
    };

    const { isLoading, data, isError, error } = useQuery(
      "writtenReviewListData",
      fetchWrittenReviewListData,
      {
        select: (data) => {
          // console.log(data);
          return data.data.data;
        },
      }
    );

    return data;
  },
  getOtherReviewList: (cornId?: string) => {

    const fetchOtherReviewListData = () => {
      return axios.get(
        `${process.env.NEXT_PUBLIC_URL_AWS}/reviews/corn/${cornId}`,
        {}
      );
    };

    const { isLoading, data, isError, error } = useQuery(
      "otherReviewListData",
      fetchOtherReviewListData,
      {
        select: (data) => {
          return data.data.data;
        },
      }
    );

    return data;
  },
  postReview: async (
    token: string,
    tradeId: string,
    postId: string,
    rating: number,
    text: string
  ) => {
    

    return await axios
      .post(
        `${process.env.NEXT_PUBLIC_URL_AWS}/reviews`,
        {
          tradeId,
          postId,
          star: rating,
          dsc: text,
        },
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
};
