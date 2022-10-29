import axios from "axios";
export const SearchUtils = {
  getSearchAllList: (
    token: string,
    keyword: string,
    page: string | number,
    size: string | number
  ) => {
    axios.get(
      `${process.env.NEXT_PUBLIC_URL_AWS}/search/all?keyword=${keyword}`,
      {
        headers: {
          Authorization: token,
        },
      }
    ).then(res => console.log(res))
      .catch(err => console.log(err))
  },
};
