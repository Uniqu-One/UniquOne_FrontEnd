import { GetServerSideProps } from "next";
import React from "react";
import FooterTmp from "../../../components/common/tmp/FooterTmp";
import TopTmp from "../../../components/common/tmp/TopTmp";
import MyQnaSingleTmp from "../../../components/my/MyQnaSingleTmp";

function QnaId(props: { qnaId: string }) {
  
  const { qnaId } = props;

  return (
    <>
      <TopTmp text="내 문의" />
      <MyQnaSingleTmp qnaId={qnaId}/>
      <FooterTmp />
    </>
  );
}

export default QnaId;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { qnaId } = query;

  return {
    props: {
      qnaId,
    },
  };
};
