import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react'
import OAuthRedirectTmp from '../../../components/common/tmp/OAuthRedirectTmp'

function OAuthToken() {

  // const router = useRouter()
  // console.log(router)

  return (
    <OAuthRedirectTmp/>
  )
}

export default OAuthToken

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { token } = query;
  
  console.log(context)

  return {
    props: {
      token,
    },
  };
};
