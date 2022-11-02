import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import OAuthRedirectTmp from "../../components/common/tmp/OAuthRedirectTmp";

function oAuthToken() {
  return <OAuthRedirectTmp />;
}

export default oAuthToken;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  console.log(query)

  return {
    props: {
      // token,
    },
  };
};
