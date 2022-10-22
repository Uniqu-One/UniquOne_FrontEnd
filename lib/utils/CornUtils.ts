import axios from "axios";
import { useInfiniteQuery, useQuery } from "react-query";
import { cornEditData } from "../../components/corn/edit/CornEditTmp";

export const CornUtils = {
  myinfo: () => {
    const fetchMyData = () => {
      return axios.get(`${process.env.NEXT_PUBLIC_URL_AWS}/posts/corns/8`);
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
      url: `${process.env.NEXT_PUBLIC_URL_AWS}/posts/corns/8`,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  },
  //TODO - 포스트로 위치 옮기기
  getMyPostList: async (token: string, pageNum: number) => {
    return await axios.get(
      `${process.env.NEXT_PUBLIC_URL_AWS}/posts/posts/listall/1?page=${pageNum}`,
      {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzeTQyMzUxM0BnbWFpbC5jb20iLCJpZCI6MSwibmlja05hbWUiOiLrsLDrtoDrpbjri6jrrLTsp4DsmYAzMyIsImVtYWlsIjoic3k0MjM1MTNAZ21haWwuY29tIiwicm9sZSI6IlJPTEVfVVNFUiIsImlhdCI6MTY2NjE0Nzc5MSwiZXhwIjoxNjY3MDExNzkxfQ.oAb6zW8DR6taLuPSOa5RArtVNR5r9KhFT4cvQKZRD1M",
        },
      }
    );
  },

};
