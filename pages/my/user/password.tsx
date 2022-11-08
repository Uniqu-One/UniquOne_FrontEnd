import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router'
import React from 'react'

function password() {

  return (
    <div>password</div>
  )
}

export default password


export const getServerSideProps: GetServerSideProps = async (context) => {
  
  if (context.req.method == "POST") {
    let body = ''
    context.req.on('data', (chunk) => {
      body += chunk
    })
    context.req.on('end', () => {
  });
  }
  return { props: {} };
};