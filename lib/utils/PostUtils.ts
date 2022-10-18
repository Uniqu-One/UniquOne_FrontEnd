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
        if (i !== null) {
          clearImgList.push(i);
        }
      });
    }

    const formData = new FormData();
    clearImgList.forEach((image) => formData.append("imgfile", image));

    const postDatas = {
      dsc: desc,
      postTagLine: tags,
      postType: type,
      postCategoryName: category,
      conditions: condition,
      lookLine: look,
      color: color,
    };

    const blob = new Blob([JSON.stringify(postDatas)], {
      type: "application/json",
    });

    formData.append("postInputDto", blob);

    await axios({
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_URL_AWS}/posts/posts/reg/1`,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  },
};
