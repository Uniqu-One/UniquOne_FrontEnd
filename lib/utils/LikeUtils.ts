import axios from "axios";
export const LikeUtils = {
  postLike: (token: string, postId: string | number) => {
    //TODO - AWS 서버로 바꾸기
    axios
      .post(
        `http://10.10.10.190:54005/cool`,
        { postId },
        {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzeTQyMzUxM0BnbWFpbC5jb20iLCJpZCI6MSwibmlja05hbWUiOiLrsLDrtoDrpbjri6jrrLTsp4DsmYAzMyIsImVtYWlsIjoic3k0MjM1MTNAZ21haWwuY29tIiwicm9sZSI6IlJPTEVfVVNFUiIsImlhdCI6MTY2NjU4OTY1NCwiZXhwIjoxNjY3NDUzNjU0fQ.jUDhiZfTG9a8XhM7YGh_lnxdcXOeWHdikT8lvCddUKQ",
          },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  },

  deleteLike: (token: string, postId: string | number) => {
    axios
      .delete(
        `http://10.10.10.190:54005/cool`,
        {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzeTQyMzUxM0BnbWFpbC5jb20iLCJpZCI6MSwibmlja05hbWUiOiLrsLDrtoDrpbjri6jrrLTsp4DsmYAzMyIsImVtYWlsIjoic3k0MjM1MTNAZ21haWwuY29tIiwicm9sZSI6IlJPTEVfVVNFUiIsImlhdCI6MTY2NjU4OTY1NCwiZXhwIjoxNjY3NDUzNjU0fQ.jUDhiZfTG9a8XhM7YGh_lnxdcXOeWHdikT8lvCddUKQ",
          },
          data: { postId },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  },
};
