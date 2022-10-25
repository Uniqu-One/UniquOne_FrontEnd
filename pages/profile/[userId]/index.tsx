import styled from '@emotion/styled'
import { GetServerSideProps } from 'next'
import React from 'react'
import FooterTmp from '../../../components/common/tmp/FooterTmp'
import TopTmp from '../../../components/common/tmp/TopTmp'
import ProfileBoxTmp from '../../../components/profile/ProfileBoxTmp'
import ProfileContentTmp from '../../../components/profile/ProfileContentTmp'
import { color } from '../../../styles/theme'

const ProfileInterVal = styled.div`
  margin-top: 12px;
  height: 12px;
  background-color: ${color.p_gray_lt};
`

function Index(props:{userId:string}) {
  return (
    <>
      <TopTmp text='userId'/>

      <ProfileBoxTmp type="other" userId={props.userId}/>
    
    <ProfileInterVal/>

    <ProfileContentTmp/>

      <FooterTmp/>
    </>
  )
}

export default Index

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { userId } = query;

  return {
    props: {
      userId,
    },
  };
};
