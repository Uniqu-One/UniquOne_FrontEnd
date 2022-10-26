import axios from "axios";
import { useInfiniteQuery, useQuery } from "react-query";
import { cornEditDataType } from "../../components/corn/edit/CornEditTmp";

export const CornUtils = {
  getMyinfo: (token: string) => {
    const fetchMyData = () => {
      return axios.get(`${process.env.NEXT_PUBLIC_URL_AWS}/posts/corns`, {
        headers: {
          Authorization: token,
        },
      });
    };

    const { isLoading, data, isError } = useQuery("myinfos", fetchMyData, {
      staleTime: 5000,
      refetchOnWindowFocus: false,
      select: (data) => {
        const userData = data.data.data;
        return userData;
      },
    });

    if (isError) {
      return false;
    }

    if (isLoading) {
      return "Loading";
    }

    return data;
  },

  editMyCornInfo: async (token: string, cornProfile: cornEditDataType) => {
    const formData = new FormData();

    if (cornProfile.img) {
      formData.append("imgfile", cornProfile.img);
    }

    const cornEditDataType = {
      title: cornProfile.cornName,
      url: cornProfile.link,
      dsc: cornProfile.desc,
      imgUrl: cornProfile.imgUrl,
    };

    const bolb = new Blob([JSON.stringify(cornEditDataType)], {
      type: "application/json",
    });

    formData.append("cornModifyDto", bolb);

    await axios({
      method: "PATCH",
      url: `${process.env.NEXT_PUBLIC_URL_AWS}/posts/corns`,
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  },
  getRandomCornName: async () => {
    return await axios
      .get(`${process.env.NEXT_PUBLIC_URL_AWS}/corns/randNick`)
      .then((res) => {
        return res.data.data.nickname;
      })
      .catch((err) => console.error(err));
  },
  postCornAccount: async (token: string, formData: {}) => {
    return await axios({
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_URL_AWS}/posts/corns`,
      headers: {
        Authorization:token,
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    })
      .then((res) => {
        if(res.data.data === "이미 생성된 유저"){
          return false;
        } else {
          return true;
        }
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  },
};
