import styled from '@emotion/styled';
import { GetServerSideProps, GetStaticProps } from 'next';
import React from 'react'
import FooterTmp from '../../components/common/tmp/FooterTmp';
import SearchBarMol from '../../components/search/SearchBarMol';
import SearchOutputTmp from '../../components/search/SearchOutputTmp';

const KeyWordStyle = styled.div`
  width: 100vw;
  overflow: hidden;
`;

function KeyWord(props:{keyword:string}) {
  const keyword = props.keyword
  return (
    <KeyWordStyle>
    <SearchBarMol keyword={keyword}/>

    <SearchOutputTmp keyword={keyword}/>

    <FooterTmp />
  </KeyWordStyle>
  )
}

export default KeyWord

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { keyword } = query;
  return {
    props: {
      keyword,
    },
  };
};
