import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import FooterTmp from "../../components/common/tmp/FooterTmp";
import TopTmp from "../../components/common/tmp/TopTmp";
import PostCardTmp from "../../components/post/PostCardTmp";
import PostContentsTmp from "../../components/post/PostContentsTmp";
import PostTypeTmp from "../../components/post/PostTypeTmp";
import { postListDummy } from "../../public/assets/datas/postListDummy";

const PostStyle = styled.div`
  width: 100vw;
  overflow: hidden;
`;

function index() {

  const [tempData, setTempData] = useState([])

  useEffect(() => {


  },[])

  return (
    <>
      <PostStyle>
        <TopTmp type="post" />
        <PostTypeTmp type="rec" />  
        
        <PostContentsTmp/>
        <FooterTmp />
      </PostStyle>
    </>
  );
}

export default index;
