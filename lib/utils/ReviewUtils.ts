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
  getCornReview: () => {
    const fetchCornReviewListData = () => {
      return axios.get(`${process.env.NEXT_PUBLIC_URL_SY}/reviews`, {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzeTQyMzVAZ21haWwuY29tIiwiaWQiOjIsIm5pY2tOYW1lIjoi66mL7KeEIOycoOuLiOy9mOuTpCIsImVtYWlsIjoic3k0MjM1QGdtYWlsLmNvbSIsInJvbGUiOiJST0xFX1VTRVIiLCJpYXQiOjE2NjYyMjY2NzAsImV4cCI6MTY2NzA5MDY3MH0.BP4sX3hZL6hjeZPu94FfcxjBeCSatmF4gHKAz-s3xUg",
        },
      });
    };

    const { isLoading, data, isError, error } = useQuery(
      "cornReviewListData",
      fetchCornReviewListData,
      {
        select: (data) => {
          return data.data.data;
        },
      }
    );

    return data;
  },

  getWrittenReview:() => {
    const fetchWrittenReviewListData = () => {
      return axios.get(`${process.env.NEXT_PUBLIC_URL_SY}/reviews/my`, {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzeTQyMzVAZ21haWwuY29tIiwiaWQiOjIsIm5pY2tOYW1lIjoi66mL7KeEIOycoOuLiOy9mOuTpCIsImVtYWlsIjoic3k0MjM1QGdtYWlsLmNvbSIsInJvbGUiOiJST0xFX1VTRVIiLCJpYXQiOjE2NjYyMjY2NzAsImV4cCI6MTY2NzA5MDY3MH0.BP4sX3hZL6hjeZPu94FfcxjBeCSatmF4gHKAz-s3xUg",
        },
      });
    };

    const { isLoading, data, isError, error } = useQuery(
      "writtenReviewListData",
      fetchWrittenReviewListData,
      {
        select: (data) => {
          return data.data.data;
        },
      }
    );

    return data;
  },
  getOtherReviewList: (cornId?:string) => {
    

    const fetchOtherReviewListData = () => {
      return axios.get(`${process.env.NEXT_PUBLIC_URL_SY}/reviews/corn/${cornId}`, {
      });
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
  }
};
