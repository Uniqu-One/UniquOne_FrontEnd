import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";
import { useRecoilValue } from "recoil";
import CommentTmp from "../../../components/comment/CommentTmp";
import TopTmp from "../../../components/common/tmp/TopTmp";
import { HeadTitleList } from "../../../public/assets/datas/headTitleList";
import { UserInfoState } from "../../../states/recoil/UserInfoState";

function comment(props: { postId: string }) {

  

  return (
    <>
      <Head>
        <title>{HeadTitleList.postComment}</title>
      </Head>
      <TopTmp type="comment" />
      <CommentTmp postId={props.postId} />
    </>
  );
}

export default comment;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { postId } = query;

  return {
    props: {
      postId,
    },
  };
};
