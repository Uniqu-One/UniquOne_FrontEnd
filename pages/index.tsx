import styled from "@emotion/styled";
import type { NextPage } from "next";
import FooterTmp from "../components/common/tmp/FooterTmp";
import TopTmp from "../components/common/tmp/TopTmp";
import MainCarouselTmp from "../components/main/MainCarouselTmp";
import MainCategoryTmp from "../components/main/MainCategoryTmp";
import MainContentTitleAtm from "../components/main/MainContentTitleAtm";
import MainRecUserCardMol from "../components/main/MainRecUserCardMol";
import MainRecUserCardTmp from "../components/main/MainRecUserCardTmp";

const IndexIntervalStyle = styled.div`
  width: 100vw;
  overflow: hidden;
`;

const Home: NextPage = () => {
  return (
    <>
      <IndexIntervalStyle>
        <TopTmp type="main" />

        <MainCarouselTmp />
        <MainCategoryTmp />

        <MainRecUserCardTmp/>

        <FooterTmp />
      </IndexIntervalStyle>
    </>
  );
};

export default Home;
