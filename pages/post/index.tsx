import styled from "@emotion/styled";
import React, { useEffect } from "react";
import FooterTmp from "../../components/common/tmp/FooterTmp";
import TopTmp from "../../components/common/tmp/TopTmp";
import PostCardTmp from "../../components/post/PostCardTmp";
import PostTypeTmp from "../../components/post/PostTypeTmp";
import { postListDummy } from "../../public/assets/datas/postListDummy";

const PostStyle = styled.div`
  width: 100vw;
  overflow: hidden;
`;

function index() {
  return (
    <>
      <PostStyle>
        <TopTmp type="post" />
        <PostTypeTmp type="rec" />
        <PostCardTmp />
        <FooterTmp />
      </PostStyle>
    </>
  );
}

export default index;
