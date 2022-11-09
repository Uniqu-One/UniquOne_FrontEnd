import styled from "@emotion/styled";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import FooterTmp from "../../components/common/tmp/FooterTmp";
import TopTmp from "../../components/common/tmp/TopTmp";
import PostContentsTmp from "../../components/post/PostContentsTmp";
import PostTypeTmp from "../../components/post/PostTypeTmp";
import { HeadTitleList } from "../../public/assets/datas/headTitleList";
import { UserInfoState } from "../../states/recoil/UserInfoState";

const PostStyle = styled.div`
  width: 100vw;
  overflow: hidden;
`;

function index() {

  const [tempMenu,setTempMenu] = useState(0)

  useEffect(() => {
    window.scroll({top:0, behavior:"smooth"})
  },[tempMenu])

  console.log(1)
  console.log(useRecoilValue(UserInfoState))

  return ( 
    <>
      <Head>
        <title>{HeadTitleList.post}</title>
      </Head>

      <PostStyle>
        <TopTmp type="post" />
        {/* 추천 팔로잉 글자 */}
        <PostTypeTmp tempMenu={tempMenu} setTempMenu={setTempMenu}/>  
        <PostContentsTmp tempMenu={tempMenu} setTempMenu={setTempMenu}/>
        <FooterTmp />
      </PostStyle>
    </>
  );
}

export default index;
