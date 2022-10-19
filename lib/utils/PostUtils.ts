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
  registPost: async (postUploadData: postDataType) => {
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

    return await axios({
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_URL_AWS}/posts/posts/reg/8`,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    })
      .then((res) => {
        return true;
      })
      .catch((err) => {
        console.error(err);
        return false;
      });
  },

  getEditPostDatas: () => {
    const fetchData = () =>
      axios.get(`${process.env.NEXT_PUBLIC_URL_AWS}/posts/posts/mod/1`, {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzeTQyMzUxM0BnbWFpbC5jb20iLCJpZCI6MSwibmlja05hbWUiOiLrsLDrtoDrpbjri6jrrLTsp4DsmYAzMyIsImVtYWlsIjoic3k0MjM1MTNAZ21haWwuY29tIiwicm9sZSI6IlJPTEVfVVNFUiIsImlhdCI6MTY2NjE0Nzc5MSwiZXhwIjoxNjY3MDExNzkxfQ.oAb6zW8DR6taLuPSOa5RArtVNR5r9KhFT4cvQKZRD1M",
        },
      });

    const { isLoading, data, isError, error } = useQuery(
      "getEidtPostDatas",
      fetchData,
      {
        select: (data) => {
          const editData = data.data.data;

          const newEditData: postDataType = {
            imgList: [null, null, null, null, null],
            desc: "",
            tags: "",
            type: "",
            category: "",
            condition: "",

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
  editPostData: async (postData: postDataType) => {

    console.log(postData)

    let { desc, tags, type, category, condition, look, color } = postData;

    if(type === "판매중"){
      type = "SALE"
    }

    const newPostData = {
      dsc:desc,
      postTagLine:tags,
      postType:type,
      postCategoryName:category,
      conditions:condition,
      lookLine:look.join(','),
      color:color.join(','),
    };

    return await axios
      .patch(`${process.env.NEXT_PUBLIC_URL_SB}/posts/posts/mod/1/1`, newPostData)
      .then((res) => {
        if (res.status === 200) {
          return true;
        }
      })
      .catch((err) => {
        console.error(err);
        return false;
      });
  },
};
