import styled from '@emotion/styled'
import React from 'react'
import {mainCategoryDummy} from "../../public/assets/datas/mainCategoryDummy"
import MainCategoryMol from './MainCategoryMol'


const MainCategoryBoxStyle = styled.div`
  height: 120px;
  overflow-x: scroll;
`

const MainCategoryContainerStyle = styled.div`
  margin-left: 18px;
  height: 120px;
  display: flex;
  justify-content: space-between;
  a{
    margin: auto 18px auto 0px;
  }
`

function MainCategoryTmp() {
  // console.log(mainCategoryDummy)
  return (
    <MainCategoryBoxStyle>
      <MainCategoryContainerStyle>
        {mainCategoryDummy.map(category => {
          return <MainCategoryMol key={category.id} title={category.title}/>
        })}
      </MainCategoryContainerStyle>
    </MainCategoryBoxStyle>
  )
}

export default MainCategoryTmp