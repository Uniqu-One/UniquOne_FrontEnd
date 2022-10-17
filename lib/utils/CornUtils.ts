import axios from "axios";
import { useQuery } from "react-query";
import { cornEditData } from "../../components/corn/edit/CornEditTmp";

export const CornUtils = {
  myinfo: () => {
    const fetchMyData = () => {
      return axios.get(`${process.env.NEXT_PUBLIC_URL_SB}/posts/corns/8`);
    };

    const { isLoading, data, isError } = useQuery("myinfos", fetchMyData, {
      staleTime: 5000,
      refetchOnWindowFocus: false,
      select: (data) => {
        const userData = data.data.data;
        return userData;
      },
    });

    if(isError){
      return false;
    }

    if (isLoading) {
      return "Loading";
    }

    return data;
  },

  patchmyinfo: async (cornProfile: cornEditData) => {
    const formData = new FormData();

    if (cornProfile.img) {
      formData.append("imgfile", cornProfile.img);
    }

    const cornEditData = {
      title: cornProfile.cornName,
      url: cornProfile.link,
      dsc: cornProfile.desc,
    };

    const bolb = new Blob([JSON.stringify(cornEditData)], {
      type: "application/json",
    });

    formData.append("cornModifyDto", bolb);

    await axios({
      method: "PATCH",
      url: `${process.env.NEXT_PUBLIC_URL_SB}/posts/corns/8`,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    })
    .then(res => console.log(res))
    .catch(err => console.error(err))
    
    ;
  },
};
