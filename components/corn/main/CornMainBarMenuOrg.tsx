import styled from '@emotion/styled'
import React from 'react'
import { color } from '../../../styles/theme'
import CornMainBarMenuButtonMol from './CornMainBarMenuButtonMol'
import { menuType } from './CornMainTmp'

const CornMainBarMenuOrgStyle = styled.div`
margin: 18px 18px 3px;

  h2{
    font-weight: 650;
    color: ${color.p_pruple};
    margin-bottom: 12px;
  }
`

function CornMainBarMenuOrg(props:{menu:{title:string, menus:menuType[]}}) {

  const {title, menus} = props.menu;

  console.log(title, menus)
  return (
    <>
    <CornMainBarMenuOrgStyle>
    <div><h2>{title}</h2></div>
    <div>
    {menus.map((menu,idx) => {
      return <CornMainBarMenuButtonMol key={idx} menu={menu}/>
    })}
    </div>
    </CornMainBarMenuOrgStyle>
    </>
  )
}

export default CornMainBarMenuOrg