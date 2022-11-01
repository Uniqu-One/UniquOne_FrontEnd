import styled from '@emotion/styled'
import { GetServerSideProps } from 'next'
import React from 'react'
import FooterTmp from '../../../components/common/tmp/FooterTmp'
import TopTmp from '../../../components/common/tmp/TopTmp'
import ProfileBoxTmp from '../../../components/profile/ProfileBoxTmp'
import ProfileContentTmp from '../../../components/profile/ProfileContentTmp'
import ProfileOtherContentTmp from '../../../components/profile/ProfileOtherContentTmp'
import { color } from '../../../styles/theme'

const ProfileInterVal = styled.div`
  margin-top: 12px;
  height: 12px;
  background-color: ${color.p_gray_lt};
`

function Index(props:{cornId:string}) {
  return (
    <>
      <TopTmp text='userId'/>

      <ProfileBoxTmp type="other" cornId={props.cornId}/>
    
    <ProfileInterVal/>

    <ProfileOtherContentTmp/>

      <FooterTmp/>
    </>
  )
}

export default Index

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { cornId } = query;

  return {
    props: {
      cornId,
    },
  };
};
