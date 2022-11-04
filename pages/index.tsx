import styled from "@emotion/styled";
import type { NextPage } from "next";
import FooterTmp from "../components/common/tmp/FooterTmp";
import TopTmp from "../components/common/tmp/TopTmp";
import MainCarouselTmp from "../components/main/MainCarouselTmp";
import MainCategoryTmp from "../components/main/MainCategoryTmp";
import MainRecContentTmp from "../components/main/MainRecContentTmp";
import MainRecOneUserTmp from "../components/main/MainRecOneUserTmp";
import MainRecStyleTmp from "../components/main/MainRecStyleTmp";


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
      <IndexIntervalStyle>
        <TopTmp type="main" />

        <MainCarouselTmp />
        <MainCategoryTmp />
        {/* <MainRecUserCardTmp /> */}
        <MainRecContentTmp title="이번 가을에는 이런 스타일은 어떠신가요? 🍂" />
        <MainRecStyleTmp />
        <MainRecContentTmp title="이번 여름에는 이런 스타일은 어떠신가요? 🐳" />
        <MainRecOneUserTmp />

        <FooterTmp />
      </IndexIntervalStyle>
    </>
  );
};

export default Home;
