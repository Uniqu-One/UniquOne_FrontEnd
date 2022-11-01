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
  getProfileData: (token: string, cornId?: string) => {

    const fetchProfile = () => {

      console.log(cornId)

      if(cornId){
        return axios.get(
          `${process.env.NEXT_PUBLIC_URL_AWS}/posts/corns/${cornId}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
      } else {
        return axios.get(
          `${process.env.NEXT_PUBLIC_URL_AWS}/posts/corns/`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
      }
    };

    const { isLoading, data } = useQuery("profileData", fetchProfile, {
      staleTime: 5000,
      refetchOnWindowFocus: false,
      select: (data) => {
        const userData = data.data.data;
        return userData;
      },
    });


    if (isLoading) {
      return "Loading";
    }

    console.log(data)

    return data;
  },
};
