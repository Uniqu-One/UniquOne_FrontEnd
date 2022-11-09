import styled from "@emotion/styled";
import type { NextPage } from "next";
import Head from "next/head";
import FooterTmp from "../components/common/tmp/FooterTmp";
import TopTmp from "../components/common/tmp/TopTmp";
import MainCarouselTmp from "../components/main/MainCarouselTmp";
import MainCategoryTmp from "../components/main/MainCategoryTmp";
import MainRecContentTmp from "../components/main/MainRecContentTmp";
import MainRecOneUserTmp from "../components/main/MainRecOneUserTmp";
import MainRecStyleTmp from "../components/main/MainRecStyleTmp";
import MainRecUserCardTmp from "../components/main/MainRecUserCardTmp";
import { motion, Variants } from "framer-motion";
import {HeadTitleList} from "../public/assets/datas/headTitleList"

const IndexIntervalStyle = styled.div`
  width: 100vw;
  overflow: hidden;

  > div {
    :nth-last-of-type(2) {
      margin-bottom: 54px;
    }
  }
`;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{HeadTitleList.index}</title>
      </Head>

      <IndexIntervalStyle>
        <TopTmp type="main" />

        <MainCarouselTmp />
        <MainCategoryTmp />


        <MainRecUserCardTmp />
        <MainRecContentTmp
          title="유니크원이 추천하는 스타일은? 💎"
          type="FALL"
        />
        <MainRecStyleTmp />
        <MainRecContentTmp
          title="이번 겨울에는 이런 스타일은 어떠신가요? ❄️"
          type="WINTER"
        />
        <MainRecOneUserTmp />

        <FooterTmp />
      </IndexIntervalStyle>
    </>
  );
};

export default Home;
