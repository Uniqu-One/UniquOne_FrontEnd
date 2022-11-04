import axios from "axios";
import { useQuery } from "react-query";

export type ProfileDataType = {
  title: string;
  dsc: string;
  imgUrl: string;
  followerEA: number;
  followingEA: number;
  isFollow: Boolean | null;
  postEA: number;
  reviewEA: number;
  reviewStar: number;
  url: string;
};

export const ProfileUtils = {
  getProfileData: async (token: string, cornId?: string) => {
      return await axios
        .get(`${process.env.NEXT_PUBLIC_URL_AWS}/posts/corns/${cornId}`, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          console.log(res, "other");
          return res.data.data;
        });
  },

  getMyProfileData: async (token:string) => {
    return await axios
      .get(`${process.env.NEXT_PUBLIC_URL_AWS}/posts/corns`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res)
        return res.data.data;
      })
      .catch((err) => console.error(err));
  }

};
