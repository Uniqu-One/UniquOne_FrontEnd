import { useQuery } from "react-query";
import axios from "axios";
import { postDataType } from "./../../types/postDataType";

export const PostUtils = {
  canPostUpload: (postUploadData: postDataType) => {
    const { imgList, desc, tags, type, category, condition, look, color } =
      postUploadData;

    if (imgList === null) {
      return false;
    }

    if (desc === "") {
      return false;
    }

    if (tags === "") {
      return false;
    }

    if (type === "") {
      return false;
    }

    if (category === "") {
      return false;
    }

    if (condition === "") {
      return false;
    }

    if (look[0] === undefined) {
      return false;
    }

    if (color[0] === undefined) {
      return false;
    }

    return true;
  },
  registerPost: async (token: string, postUploadData: postDataType) => {
    const { imgList, desc, tags, type, category, condition, look, color } =
      postUploadData;

    const clearImgList: File[] = [];
    if (imgList !== null) {
      imgList.forEach((i) => {
        if (i !== null && typeof i !== "string") {
          clearImgList.push(i);
        }
      });
    }

    const formData = new FormData();
    clearImgList.forEach((image) => {
      formData.append("imgfilelist", image);
    });

    const postDatas = {
      dsc: desc,
      postTagLine: tags,
      postType: "SALE",
      postCategoryName: category,
      conditions: condition,
      lookLine: look.join(","),
      color: color.join(","),
    };

    const blob = new Blob([JSON.stringify(postDatas)], {
      type: "application/json",
    });

    formData.append("postInputDto", blob);

    for (let i of formData) {
      console.log(i);
    }

    // return await axios({
    //   method: "POST",
    //   url: `${process.env.NEXT_PUBLIC_URL_AWS}/posts/posts/reg`,
    //   headers: {
    //     Authorization:
    //       "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzeTQyMzUxM0BnbWFpbC5jb20iLCJpZCI6MSwibmlja05hbWUiOiLrsLDrtoDrpbjri6jrrLTsp4DsmYAzMyIsImVtYWlsIjoic3k0MjM1MTNAZ21haWwuY29tIiwicm9sZSI6IlJPTEVfVVNFUiIsImlhdCI6MTY2NjE0Nzc5MSwiZXhwIjoxNjY3MDExNzkxfQ.oAb6zW8DR6taLuPSOa5RArtVNR5r9KhFT4cvQKZRD1M",
    //     "Content-Type": "multipart/form-data",
    //   },
    //   data: formData,
    // });

    return await axios
      .post(`${process.env.NEXT_PUBLIC_URL_AWS}/posts/posts/reg`, formData, {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzeTQyMzUxM0BnbWFpbC5jb20iLCJpZCI6MSwibmlja05hbWUiOiLrsLDrtoDrpbjri6jrrLTsp4DsmYAzMyIsImVtYWlsIjoic3k0MjM1MTNAZ21haWwuY29tIiwicm9sZSI6IlJPTEVfVVNFUiIsImlhdCI6MTY2NjE0Nzc5MSwiZXhwIjoxNjY3MDExNzkxfQ.oAb6zW8DR6taLuPSOa5RArtVNR5r9KhFT4cvQKZRD1M",
          "Content-Type": "multipart/form-data",
        },
      })

      .then((res) => {
        console.log(res);
        return true;
      })
      .catch((err) => {
        console.log(formData);
        console.error(err);
        return false;
      });
  },

  getEditPostDatas: (token: string, postId?: string) => {
    if (postId === undefined) {
      return undefined;
    }

    const fetchData = () =>
      axios.get(
        `${process.env.NEXT_PUBLIC_URL_AWS}/posts/posts/mod/${postId}`,
        {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzeTQyMzUxM0BnbWFpbC5jb20iLCJpZCI6MSwibmlja05hbWUiOiLrsLDrtoDrpbjri6jrrLTsp4DsmYAzMyIsImVtYWlsIjoic3k0MjM1MTNAZ21haWwuY29tIiwicm9sZSI6IlJPTEVfVVNFUiIsImlhdCI6MTY2NjE0Nzc5MSwiZXhwIjoxNjY3MDExNzkxfQ.oAb6zW8DR6taLuPSOa5RArtVNR5r9KhFT4cvQKZRD1M",
          },
        }
      );

    const { isLoading, data, isError, error } = useQuery(
      "getEidtPostDatas",
      fetchData,
      {
        select: (data) => {
          const editData = data.data.data;

          const newEditData: postDataType = {
            imgList: [null, null, null, null, null],
            title: "",
            desc: "",
            tags: "",
            type: "",
            category: "",
            condition: "",
            price: "",

            look: [],
            color: [],
          };

          newEditData.category = editData.postCategoryName;
          newEditData.color = editData.color;
          newEditData.condition = editData.conditions;
          newEditData.desc = editData.dsc;
          newEditData.look = editData.lookList;
          newEditData.tags = editData.postTagNameList.join("");
          if (editData.postType === "SALE") {
            newEditData.type = "판매중";
          }
          newEditData.imgList = editData.postImgList;

          return newEditData;
        },
      }
    );
    if (isError) {
      console.log(error);
    }
    return data;
  },
  editPostData: async (
    token: string,
    postData: postDataType,
    postId?: string
  ) => {
    console.log(postData);

    let { desc, tags, type, category, condition, look, color } = postData;

    if (type === "판매중") {
      type = "SALE";
    }

    const newPostData = {
      dsc: desc,
      postTagLine: tags,
      postType: "SALE",
      postCategoryName: category,
      conditions: condition,
      lookLine: look.join(","),
      color: color.join(","),
    };

    return await axios
      .put(
        `${process.env.NEXT_PUBLIC_URL_AWS}/posts/posts/mod/${postId}`,
        newPostData,
        {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzeTQyMzUxM0BnbWFpbC5jb20iLCJpZCI6MSwibmlja05hbWUiOiLrsLDrtoDrpbjri6jrrLTsp4DsmYAzMyIsImVtYWlsIjoic3k0MjM1MTNAZ21haWwuY29tIiwicm9sZSI6IlJPTEVfVVNFUiIsImlhdCI6MTY2NjE0Nzc5MSwiZXhwIjoxNjY3MDExNzkxfQ.oAb6zW8DR6taLuPSOa5RArtVNR5r9KhFT4cvQKZRD1M",
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          return true;
        }
      })
      .catch((err) => {
        console.error(err);
        return false;
      });
  },
  postReportData: (
    token: string,
    postId: string | number,
    reportType: string
  ) => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_URL_AWS}/posts/report`,
        { postId, reportType },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  },
  getMyPostList: async (token: string, pageNum: number) => {
    return await axios.get(
      `${process.env.NEXT_PUBLIC_URL_AWS}/posts/posts/listall/1?page=${pageNum}`,
      {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzeTQyMzUxM0BnbWFpbC5jb20iLCJpZCI6MSwibmlja05hbWUiOiLrsLDrtoDrpbjri6jrrLTsp4DsmYAzMyIsImVtYWlsIjoic3k0MjM1MTNAZ21haWwuY29tIiwicm9sZSI6IlJPTEVfVVNFUiIsImlhdCI6MTY2NjE0Nzc5MSwiZXhwIjoxNjY3MDExNzkxfQ.oAb6zW8DR6taLuPSOa5RArtVNR5r9KhFT4cvQKZRD1M",
        },
      }
    ).then(res => {
      // console.log(res.data.data.content[0])
      return res.data.data.content[0]
    })
    .catch(err => console.error(err))
  },
  getMySellPostList: async (token: string, pageNum: number) => {

    return await axios.get(
      `${process.env.NEXT_PUBLIC_URL_AWS}/posts/posts/listproduct/1?page=${pageNum}`,
      {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzeTQyMzUxM0BnbWFpbC5jb20iLCJpZCI6MSwibmlja05hbWUiOiLrsLDrtoDrpbjri6jrrLTsp4DsmYAzMyIsImVtYWlsIjoic3k0MjM1MTNAZ21haWwuY29tIiwicm9sZSI6IlJPTEVfVVNFUiIsImlhdCI6MTY2NjE0Nzc5MSwiZXhwIjoxNjY3MDExNzkxfQ.oAb6zW8DR6taLuPSOa5RArtVNR5r9KhFT4cvQKZRD1M",
        },
      }
    ).then(res => {
      // console.log(res.data.data.content[0])
      return res.data.data.content[0]
    })
    .catch(err => console.error(err))

  },
  getMyStylePostList: async (token: string, pageNum: number) => {
    
    return await axios.get(
      `${process.env.NEXT_PUBLIC_URL_AWS}/posts/posts/liststyle/1?page=${pageNum}`,
      {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzeTQyMzUxM0BnbWFpbC5jb20iLCJpZCI6MSwibmlja05hbWUiOiLrsLDrtoDrpbjri6jrrLTsp4DsmYAzMyIsImVtYWlsIjoic3k0MjM1MTNAZ21haWwuY29tIiwicm9sZSI6IlJPTEVfVVNFUiIsImlhdCI6MTY2NjE0Nzc5MSwiZXhwIjoxNjY3MDExNzkxfQ.oAb6zW8DR6taLuPSOa5RArtVNR5r9KhFT4cvQKZRD1M",
        },
      }
    ).then(res => {
      // console.log(res.data.data.content[0])
      return res.data.data.content[0]
    })
    .catch(err => console.error(err))

  }
};
