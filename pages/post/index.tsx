import styled from "@emotion/styled";
import React, { useEffect } from "react";
import FooterTmp from "../../components/common/tmp/FooterTmp";
import TopTmp from "../../components/common/tmp/TopTmp";
import PostCardTmp from "../../components/post/PostCardTmp";
import PostTypeTmp from "../../components/post/PostTypeTmp";
import { postListDummy } from "../../public/assets/datas/postListDummy";

const PostIntervalStyle = styled.div`
  width: 100vw;
  overflow: hidden;

  > div {
    :nth-of-type(2) {
      margin-top: 48px;
    }

    :nth-last-child(2) {
      margin-bottom: 54px;
    }
  }
`;

function index() {

  return (
    <>
      <PostIntervalStyle>
        <TopTmp type="post" />

        <PostTypeTmp type="rec" />

        {postListDummy.map((post) => {
          return <PostCardTmp key={post.id} postId={post.id}/>;
        })}

        <FooterTmp />
      </PostIntervalStyle>
    </>
  );
}

export default index;
