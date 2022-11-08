import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import OAuthRedirectTmp from "../../components/common/tmp/OAuthRedirectTmp";

function oAuthToken(props:{token:string}) {
  return <OAuthRedirectTmp token={props.token}/>;
}

export default oAuthToken;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const token = query.token;

  return {
    props: {
      token
    },
  };
};
