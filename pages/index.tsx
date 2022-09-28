import type { NextPage } from 'next'
import FooterTmp from '../components/common/tmp/FooterTmp'
import TopTmp from '../components/common/tmp/TopTmp'
import MainCarouselTmp from '../components/main/MainCarouselTmp'

const Home: NextPage = () => {
  return (
    <>
      <TopTmp type='main'/>
      <MainCarouselTmp/>
      <FooterTmp/>
      </>
  )
}

export default Home
