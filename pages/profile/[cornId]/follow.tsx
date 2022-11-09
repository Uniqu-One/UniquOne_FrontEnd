import { GetServerSideProps } from 'next'
import React from 'react'
import FooterTmp from '../../../components/common/tmp/FooterTmp'
import TopTmp from '../../../components/common/tmp/TopTmp'
import ProfileFollowTmp from '../../../components/profile/ProfileFollowTmp'

function follow(props:{cornId:string|number}) {
  return (
    <>
    <TopTmp text='팔로우'/>

    <ProfileFollowTmp type="other" cornId={props.cornId}/>

    <FooterTmp/>
    </>
  )
}

export default follow

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { cornId } = query;

  return {
    props: {
      cornId,
    },
  };
};