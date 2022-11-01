import styled from "@emotion/styled";
import React from "react";
import FooterTmp from "../../components/common/tmp/FooterTmp";
import TopTmp from "../../components/common/tmp/TopTmp";
import PostContentsTmp from "../../components/post/PostContentsTmp";
import PostTypeTmp from "../../components/post/PostTypeTmp";

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
        
        <PostContentsTmp/>
        <FooterTmp />
      </PostStyle>
    </>
  );
}

export default index;
