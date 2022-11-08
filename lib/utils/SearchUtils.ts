import axios from "axios";
import { searchFilterType } from "../../types/searchFilterType";
import {POST_MENU_LIST} from "../../public/assets/datas/postMenuList"

export const SearchUtils = {
  getSearchAllList: async (
    token: string,
    keyword: string,
    page?: string | number,
    size?: string | number
  ) => {
    return await axios
      .get(
        `${process.env.NEXT_PUBLIC_URL_AWS}/search/all?keyword=${keyword}`,
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        console.log(res,'search')
        return res.data;
      })
      .catch((err) => console.log(err));
  },
  getSearchPostList: async (
    token: string,
    keyword: string,
    searchFilterData:searchFilterType,
    page?: string | number,
    size?: string | number,
    sort?: string
  ) => {

    

    const newLookList = searchFilterData.룩.map(look => POST_MENU_LIST.look.indexOf(look) + 1)
    const newCategoryList = searchFilterData.카테고리.map(category => POST_MENU_LIST.category.indexOf(category) +1 )

    const dataObj = {colors:"",looks:"",categoryId:""};
    dataObj.colors = searchFilterData.색상.join(',')
    dataObj.looks = newLookList.join(',')
    dataObj.categoryId = newCategoryList.join('')

    console.log(dataObj)

    return await axios
      .get(
        `${process.env.NEXT_PUBLIC_URL_AWS}/search/post?keyword=${keyword}&colors=${dataObj.colors}&looks=${dataObj.looks}&conditions=&categoryId=${dataObj.categoryId}`,
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        // console.log(res.data)
        return res.data;
      })
      .catch((err) => console.log(err));
  },
  getSearchHashTagList: async (
    token: string,
    keyword: string,
    page?: number,
    size?: number
  ) => {
    return await axios
      .get(
        `${process.env.NEXT_PUBLIC_URL_AWS}/search/hashTag?keyword=${keyword}`,
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
  },
  getSearchCornNameList: (
    token: string,
    keyword: string,
    page?: number,
    size?: number
  ) => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_URL_AWS}/search/corn?keyword=${keyword}`,
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  },
};
