import styled from '@emotion/styled'
import React from 'react'
import {mainCategoryDummy} from "../../public/assets/datas/mainCategoryDummyList"
import MainCategoryMol from './MainCategoryMol'


const MainCategoryBoxStyle = styled.div`
  height: 120px;
  overflow-x: scroll;
  ::-webkit-scrollbar{
    display: none;
  }
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
  
  return (
    <MainCategoryBoxStyle>
      <MainCategoryContainerStyle>
        {mainCategoryDummy.map(category => {
          return <MainCategoryMol key={category.id} title={category.title} src={category.src}/>
        })}
      </MainCategoryContainerStyle>
    </MainCategoryBoxStyle>
  )
}

export default MainCategoryTmp