import axios from "axios";
export const SearchUtils = {
  getSearchAllList: (
    token: string,
    keyword: string,
    page?: string | number,
    size?: string | number
  ) => {
    axios
      .get(`${process.env.NEXT_PUBLIC_URL_AWS}/search/all?keyword=${keyword}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  },
  getSearchPostList: (
    token: string,
    keyword: string,
    filter?: {
      colors?: string;
      categoryId?: string | number;
      conditions?: string;
      postType?: string;
      looks?: string;
    },
    page?: string | number,
    size?: string | number,
    sort?: string
  ) => {
    //ex). sort=recommand,dsc   (추천순),
    // sort=regdt,dsc       (최신순),
    // sort=price,dsc (가격 ,내림차순),
    // sort=price,asc(가격, 오름차순)
    axios
      .get(`${process.env.NEXT_PUBLIC_URL_AWS}/search/post?keyword=${keyword}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  },
  getSearchHashTagList:(token:string,keyword:string,page?:number,size?:number)=>{
    axios
    .get(`${process.env.NEXT_PUBLIC_URL_AWS}/search/hashTag?keyword=${keyword}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => console.log(err));

  },
  getSearchCornNameList:(token:string,keyword:string,page?:number,size?:number)=>{
    axios
    .get(`${process.env.NEXT_PUBLIC_URL_AWS}/search/corn?keyword=${keyword}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  }
};
