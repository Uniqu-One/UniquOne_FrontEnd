import type { NextPage } from 'next'
import UniStarMol from '../components/common/mol/UniStarMol'
import FooterTmp from '../components/common/tmp/FooterTmp'
import ToastTmp from '../components/common/tmp/ToastTmp'
import TopTmp from '../components/common/tmp/TopTmp'

const Home: NextPage = () => {
  return (
    <div>
      <TopTmp type='main'/>
      <UniStarMol/>
      <ToastTmp/>
      <FooterTmp/>
    </div>
  )
}

export default Home
