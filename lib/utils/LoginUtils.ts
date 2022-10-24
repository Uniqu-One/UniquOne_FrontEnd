import axios from "axios";

export const LoginUtils = {
  login: async (email: string, password: string) => {
    return await axios
      .post(`${process.env.NEXT_PUBLIC_URL_AWS}/login/oauth`, {
        email,
        password,
      })
      .then((res) => {
        if (res.status === 200) {
          return res.data;
        }
      })
      .catch((err) => console.error(err));
  },
  getUserInfo: async (token: string) => {
    return await axios
      .get(`${process.env.NEXT_PUBLIC_URL_DK}/commons/info`,{
        headers:{
          Authorization:token
        }
      })
      .then((res) => {
        console.log(res);
        return res.data.data;
      })
      .catch((err) => console.error(err));
  },
};
