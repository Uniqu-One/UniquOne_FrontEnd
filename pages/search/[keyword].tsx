import styled from '@emotion/styled';
import { GetServerSideProps, GetStaticProps } from 'next';
import React, { useState } from 'react'
import FooterTmp from '../../components/common/tmp/FooterTmp';
import SearchBarMol from '../../components/search/SearchBarMol';
import SearchClickMenuMol from '../../components/search/SearchClickMenuMol';
import SearchOutputTmp from '../../components/search/SearchOutputTmp';

const KeyWordStyle = styled.div`
  width: 100vw;
  overflow: hidden;
`;

function KeyWord(props:{keyword:string}) {
  const keyword = props.keyword
  const [tempMenu, setTempMenu] = useState("전체");
  return (
    <KeyWordStyle>
    <SearchBarMol keyword={keyword}/>
    <SearchClickMenuMol tempMenu={tempMenu} setTempMenu={setTempMenu}/>
    <SearchOutputTmp keyword={keyword} tempMenu={tempMenu} setTempMenu={setTempMenu}/>
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
