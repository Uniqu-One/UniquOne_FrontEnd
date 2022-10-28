import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import OAuthRedirectTmp from "../../../components/common/tmp/OAuthRedirectTmp";


function oAuthToken() {
  return <OAuthRedirectTmp />;
}

export default oAuthToken;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { token } = query;
  const stringToken = JSON.stringify(token)
  const toto = JSON.parse(stringToken)

  console.log(toto)

  return {
    props: {
      token,
    },
  };
};
