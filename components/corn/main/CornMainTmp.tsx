import React from "react";
import CornMainBarMenuOrg from "./CornMainBarMenuOrg";
import CornMainDashMol from "./CornMainDashMol";

export interface menuType {
  title:string,
  link:string,
  icon:string
}

function CornMainTmp() {

  const CORN_MAIN_MENU = [
    {title:"리스팅",menus:[
      
      {title:"새 포스트 등록", link:"corn/post", icon:"arrow-ios-forward-outline"},
      {title:"모든 포스트 보기", link:"corn/list", icon:"menu-outline"},]},
      
    {title:"콘 상태",menus:[
      {title:"오퍼 보기", link:"corn/offer", icon:"navigation-2-outline"},
      {title:"리뷰 보기", link:"my/review", icon:"message-square-outline"},
      {title:"콘 디테일", link:"corn/detail", icon:"bar-chart-2-outline"},
      {title:"콘 프로필 수정", link:"corn/edit", icon:"edit-2-outline"},]}
  ]

  return (
    <>
     <CornMainDashMol/>
     {CORN_MAIN_MENU.map(menu => {
      return <CornMainBarMenuOrg key={menu.title} menu={menu}/>
     })}
    </>
  );
}

export default CornMainTmp;
