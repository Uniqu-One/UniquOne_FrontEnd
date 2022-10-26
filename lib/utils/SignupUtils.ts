import axios from "axios";
export const SignupUtils = {
  sendAuthMail: async (email: string) => {
    await axios
      .post(`${process.env.NEXT_PUBLIC_URL_AWS}/auth/ePush`, { email })
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));

    return null;
  },

  checkAuthCode: async (email: string, code: number) => {
    const checkStatus = await axios
      .post(`${process.env.NEXT_PUBLIC_URL_AWS}/auth/check`, { email, code })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          return true;
        }
      })
      .catch((err) => {
        console.error(err);
        {
          return false;
        }
      });

    return checkStatus;
  },

  makeRandomNickName: async () => {
    return await axios
      .get(`${process.env.NEXT_PUBLIC_URL_AWS}/signup/randNick`)
      .then((res) => {
        return res.data.nickname;
      })
      .catch((err) => console.error(err));
  },

  checkOverlapNickName: async (nickName: string) => {
    return await axios
      .get(`${process.env.NEXT_PUBLIC_URL_AWS}/auth/${nickName}/exist`)
      .then((res) => {
        return res.data.existNickName;
      })
      .catch((err) => {
        console.log(err);
        return true;
      });
  },

  signupAccount: async (signupInput: {
    email: string;
    userPwd: string;
    nickName: string;
  }) => {
    const email = signupInput.email;
    const password = signupInput.userPwd;
    const nickname = signupInput.nickName;

    return await axios
      .post(`${process.env.NEXT_PUBLIC_URL_AWS}/signup`, {
        email,
        password,
        nickname,
      })
      .then((res) => {
        return true;
      })
      .catch((err) => {
        console.error(err);
        return false;
      });
  },

  checkOverlapEmail: async (email: string) => {
    return await axios
      .get(`${process.env.NEXT_PUBLIC_URL_AWS}/signup/${email}/exist`)
      .then((res) => {
        console.log(res);
        return true;
      })
      .catch((err) => {
        console.error(err);
        return false;
      });
  },
};
