import axios from "axios";

export const FollowUtils = {
  registerFollow: async (token: string, cornId: string | number) => {
    return await axios
      .post(
        `${process.env.NEXT_PUBLIC_URL_AWS}/posts/following`,
        {
          cornId,
        },
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
  cancelFollow: async (token: string, cornId: string | number) => {
    return await axios
      .delete(`${process.env.NEXT_PUBLIC_URL_AWS}/posts/following`, {
        headers: {
          Authorization: token,
        },
        data: {
          cornId,
        },
      })
      .then((res) => {
        console.log(res);
        return true;
      })
      .catch((err) => {
        console.error(err);
        return false;
      });
  },

  //팔로우 조회
  getOthersFollow: async (token: string, cornId: string | number) => {
    return await axios
      .get(`${process.env.NEXT_PUBLIC_URL_AWS}/posts/otherfollower/${cornId}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res);
        return true;
      })
      .catch((err) => {
        console.error(err);
        return false;
      });
  },
  getOthersFollowing: async (token: string, cornId: string | number) => {
    return await axios
      .get(
        `${process.env.NEXT_PUBLIC_URL_AWS}/posts/otherfollowing/${cornId}`,
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
  getMyFollow: async (token: string) => {
    return await axios
      .get(`${process.env.NEXT_PUBLIC_URL_AWS}/posts/myfollower`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res);
        return true;
      })
      .catch((err) => {
        console.error(err);
        return false;
      });
  },
  getMyFollowing: async (token: string) => {
    return await axios
      .get(
        `${process.env.NEXT_PUBLIC_URL_AWS}/posts/myfollowing`,
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
};
