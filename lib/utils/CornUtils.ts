import axios from "axios";
import { useInfiniteQuery, useQuery } from "react-query";
import { cornEditDataType } from "../../components/corn/edit/CornEditTmp";

export const CornUtils = {
  getMyinfo: (token:string) => {

    const fetchMyData = () => {
      return axios.get(`${process.env.NEXT_PUBLIC_URL_AWS}/posts/corns`,{
        headers:{
          Authorization:token
        }
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

  editMyCornInfo: async (token:string,cornProfile: cornEditDataType) => {
    const formData = new FormData();

    if (cornProfile.img) {
      formData.append("imgfile", cornProfile.img);
    }

    const cornEditDataType = {
      title: cornProfile.cornName,
      url: cornProfile.link,
      dsc: cornProfile.desc,
      imgUrl:cornProfile.imgUrl
    };

    const bolb = new Blob([JSON.stringify(cornEditDataType)], {
      type: "application/json",
    });

    formData.append("cornModifyDto", bolb);

    console.log(cornEditDataType)
    
    

    await axios({
      method: "PATCH",
      url: `${process.env.NEXT_PUBLIC_URL_SB}/posts/corns`,
      headers: {
        Authorization:token,
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.error(err));

  },


  //TODO - 포스트로 위치 옮기기
  getRandomCornName: async () => {
    return await axios
      .get(`${process.env.NEXT_PUBLIC_URL_DK}/corns/randNick`)
      .then((res) => {
        return res.data.data.nickname
      })
      .catch((err) => console.error(err));
  },
};
