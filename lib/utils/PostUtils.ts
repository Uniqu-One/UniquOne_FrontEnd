import { useQuery } from "react-query";
import axios from "axios";
import { postDataType } from "./../../types/postDataType";

export const PostUtils = {
  canPostUpload: (postUploadData: postDataType) => {
    const {
      title,
      imgList,
      desc,
      tags,
      type,
      category,
      condition,
      look,
      color,
      productSize,
      price,
    } = postUploadData;

    if (title === "") {
      return false;
    }

    if (productSize === "") {
      return false;
    }
    if (productSize === "") {
      return false;
    }

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
    const {
      imgList,
      title,
      desc,
      tags,
      postType,
      category,
      condition,
      look,
      color,
      productSize,
      price,
    } = postUploadData;

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

    //TODO - any 수정 indexing 처리 해야함
    let engType: any = { 판매중: "SALE", 나눔: "SHARE", 스타일: "STYLE" };

    const postDatas = {
      title: title,
      dsc: desc,
      postTagLine: tags,
      postType: engType[postType],
      postCategoryName: category,
      conditions: condition,
      lookLine: look.join(","),
      color: color.join(","),
      productSize: productSize,
      price: price,
    };

    const blob = new Blob([JSON.stringify(postDatas)], {
      type: "application/json",
    });

    formData.append("postInputDto", blob);

    console.log(postDatas);

    for (let i of formData) {
      console.log(i);
    }

    return await axios
      .post(`${process.env.NEXT_PUBLIC_URL_AWS}/posts/posts/reg`, formData, {
        headers: {
          Authorization: token,
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

    //token

    const fetchData = () =>
      axios.get(
        `${process.env.NEXT_PUBLIC_URL_AWS}/posts/posts/mod/${postId}`,
        {
          headers: {
            Authorization: token,
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
            postType: "",
            title: "",
            desc: "",
            tags: "",
            category: "",
            condition: "",
            price: "",
            productSize: "",

            look: [],
            color: [],
          };

          newEditData.category = editData.postCategoryName;
          newEditData.color = editData.color;
          newEditData.condition = editData.conditions;
          newEditData.desc = editData.dsc;
          newEditData.look = editData.lookList;
          newEditData.tags = editData.postTagNameList.join("");
          newEditData.title = editData.title;
          newEditData.price = editData.price;
          newEditData.productSize = editData.productSize;

          if (editData.postType === "SALE") {
            newEditData.postType = "판매중";
          } else if (editData.postType === "SHARE") {
            newEditData.postType = "나눔";
          } else if (editData.postType === "STYLE") {
            newEditData.postType = "스타일";
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
    let { desc, tags, postType, category, condition, look, color } = postData;

    let engType: any = { 판매중: "SALE", 나눔: "SHARE", 스타일: "STYLE" };

    const newPostData = {
      dsc: desc,
      postTagLine: tags,
      postType: engType[postType],
      postCategoryName: category,
      conditions: condition,
      lookLine: look.join(","),
      color: color.join(","),
    };

    return await axios
      .patch(
        `${process.env.NEXT_PUBLIC_URL_AWS}/posts/posts/mod/${postId}`,
        newPostData,
        {
          headers: {
            Authorization: token,
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
  postReportData: async (
    token: string,
    postId: string | number,
    reportType: string
  ) => {
    return await axios
      .post(
        `${process.env.NEXT_PUBLIC_URL_AWS}/posts/report`,
        { postId, reportType },
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

  getMyPostList: async (token: string, pageNum: number) => {
    return await axios
      .get(
        `${process.env.NEXT_PUBLIC_URL_AWS}/posts/posts/mylistall?page=${pageNum}`,
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        console.log(res.data.data.content);
        return res.data.data.content;
      })
      .catch((err) => console.error(err));
  },
  getMySellPostList: async (token: string, pageNum: number) => {
    return await axios
      .get(
        `${process.env.NEXT_PUBLIC_URL_AWS}/posts/posts/mylistproduct?page=${pageNum}`,
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        return res.data.data.content;
      })
      .catch((err) => console.error(err));
  },
  getMyStylePostList: async (token: string, pageNum: number) => {
    return await axios
      .get(
        `${process.env.NEXT_PUBLIC_URL_AWS}/posts/posts/myliststyle?page=${pageNum}`,
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        console.log(res);
        return res.data.data.content;
      })
      .catch((err) => console.error(err));
  },

  getOtherPostList: async (cornId: string, pageNum: number) => {
    return await axios
      .get(
        `${process.env.NEXT_PUBLIC_URL_AWS}/posts/posts/listall/${cornId}?page=${pageNum}`
      )
      .then((res) => {
        console.log(res);
        return res.data.data.content;
      })
      .catch((err) => console.error(err));
  },
  getOtherSellPostList: async (cornId: string, pageNum: number) => {
    return await axios
      .get(
        `${process.env.NEXT_PUBLIC_URL_AWS}/posts/posts/listproduct/${cornId}?page=${pageNum}`
      )
      .then((res) => {
        return res.data.data.content;
      })
      .catch((err) => console.error(err));
  },

  getOtherStylePostList: async (cornId: string, pageNum: number) => {
    return await axios
      .get(
        `${process.env.NEXT_PUBLIC_URL_AWS}/posts/posts/liststyle/${cornId}?page=${pageNum}`
      )
      .then((res) => {
        return res.data.data.content;
      })
      .catch((err) => console.error(err));
  },

  getPostDetailData: async (token: string, postId: string | number) => {
    return await axios
      .get(`${process.env.NEXT_PUBLIC_URL_AWS}/posts/posts/detail/${postId}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res);
        return res.data.data;
      })
      .catch((err) => console.error(err));
  },

  getRecPostData: async (token: string) => {
    return await axios
      .get(`${process.env.NEXT_PUBLIC_URL_AWS}/posts/posts/my/recommend`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res);
        return res.data.data;
      })
      .catch((err) => console.error(err));
  },

  getFollowingPostData: async (token: string) => {
    return await axios
      .get(
        `${process.env.NEXT_PUBLIC_URL_AWS}/posts/main/search/contents/follow`,
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        console.log(res.data.data.content, "follow");
        return res.data.data.content;
      })
      .catch((err) => console.error(err));
  },
  getRecommendPostData: async (token: string) => {
    return await axios
      .get(`${process.env.NEXT_PUBLIC_URL_AWS}/posts/posts/cool`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res.data.data.content, "rec");
        return res.data.data.content;
      })
      .catch((err) => console.error(err));
  },

  getThisSeasonsData: async (seasons: string) => {
    return await axios.get(
      `${process.env.NEXT_PUBLIC_URL_AWS}/admin/thisSeason/${seasons}`
    ).then(res => {
      return res.data.data
    })
      .catch(err => console.error(err))
  },
};
