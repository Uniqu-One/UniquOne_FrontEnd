import axios from "axios";

export const LoginUtils = {
  login:  async (email: string, password: string) => {
    return await axios
      .post(`${process.env.NEXT_PUBLIC_URL_AWS}/login/oauth`, {
        email,
        password,
      })
      .then((res) => {
        console.log(res)
        return res.data;
      })
      .catch((err) => console.error(err));
  },
  getUserInfo: async (token: string) => {
    return await axios
      .get(`${process.env.NEXT_PUBLIC_URL_AWS}/commons/info`,{
        headers:{
          Authorization:token
        }
      })
      .then((res) => {
        console.log(res)
        return res.data.data;
      })
      .catch((err) => {
        console.error(err)
        return 'expired'
      });
  },
};
