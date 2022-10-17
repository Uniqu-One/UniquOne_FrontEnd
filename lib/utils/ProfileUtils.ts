import axios from "axios";
import { useQuery } from "react-query";

export type ProfileDataType = {
  title:string,
  dsc:string,
  imgUrl:string,
  followerEA:number,
  followingEA:number,
  isFollow:Boolean | null,
  postEA:number,
  reviewEA:number,
  reviewStar:number,
  url:string
}

export const ProfileUtils = {
  getProfileData: (cornId:number) => {
    const fetchProfile = () => {
      return axios.get(`${process.env.NEXT_PUBLIC_URL_SB}/posts/corns/${cornId}`);
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

    return data;
  },
  getMyProfileData: () => {
    const fetchProfile = () => {
      return axios.get(`${process.env.NEXT_PUBLIC_URL_SB}/posts/corns/1`);
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

    return data;
  },
};
