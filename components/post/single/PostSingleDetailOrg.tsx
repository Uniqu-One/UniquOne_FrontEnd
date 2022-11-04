import styled from "@emotion/styled";
import React from "react";
import { color } from "../../../styles/theme";
import SmBtnAtm from "../../common/atm/SmBtnAtm";
import { POST_MENU_LIST } from "../../../public/assets/datas/postMenuList";
import {COLOR_CODE_LIST} from "../../../public/assets/datas/colorCodeList"

const PostSingleDetailBoxStyle = styled.div`
  margin-top: 18px;
  margin-bottom: 12px;
  div {
    margin-right: 6px;
  }
`;

function PostSingleDetailOrg(props:{postDetailData:any}) {

  const {
    colorList,
    condition,
    dsc,
    lookId,
    postCategoryId,
    postTagList,
    postType,
    productSize,
    title,
  } = props.postDetailData;

  return (
    <>
      <PostSingleDetailBoxStyle>
        
      {colorList.map((color:string,idx:number) => {
        return <SmBtnAtm color={color} text={color} key={idx}/>
      })}
        

        
        {lookId.map((look:any) => {
          return <SmBtnAtm color={"white"} text={POST_MENU_LIST.look[look-1]} key={look}/>
        })}
        

        <SmBtnAtm color={"그레이"} text={`Size ${productSize}`} />
        <SmBtnAtm color={"그레이"} text={condition} />
      </PostSingleDetailBoxStyle>
    </>
  );
}

export default PostSingleDetailOrg;
