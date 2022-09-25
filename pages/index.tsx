import styled from '@emotion/styled'
import type { NextPage } from 'next'

const DIVBOX = styled.div`
  background-color: blue;
  width: 100px;
  height: 100px;
`

const Home: NextPage = () => {
  return (
    <div>
      <DIVBOX/>
    </div>
  )
}

export default Home
