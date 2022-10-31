import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { PostUtils } from "../../lib/utils/PostUtils";
import { TokenState } from "../../states/recoil/TokenState";
import PostCardMol from "./PostCardMol";

const PostContentsTmpStyle = styled.div`
  padding-bottom: 60px;
`;

function PostContentsTmp() {
  const token = useRecoilValue(TokenState).token;
  const [tempData, setTempData] = useState<{ postId: string | number }[]>([]);

  const updatePostData = async () => {
    setTempData(await PostUtils.getFollowingPostData(token));
  };

  useEffect(() => {
    updatePostData();
  }, []);

  if (tempData === undefined) {
    return <div>데이터 없음</div>;
  }

  return (
    <PostContentsTmpStyle>
      {tempData.map((post) => {
        return (
          <div key={post.postId}>
            <PostCardMol postListData={post} />
          </div>
        );
      })}
    </PostContentsTmpStyle>
  );
}

export default PostContentsTmp;
