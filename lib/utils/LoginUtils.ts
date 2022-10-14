import axios from "axios";

export const LoginUtils = {
  login: async (email: string, password: string) => {
    return await axios
      .post(`${process.env.NEXT_PUBLIC_URL_AWS}/login/oauth`, {
        email,
        password,
      })
      .then((res) => {
        if(res.status === 200){
          return res.data
        }
      
      })
      .catch((err) => console.error(err));
  },
};
