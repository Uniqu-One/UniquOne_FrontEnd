import styled from "@emotion/styled";
import React from "react";
import { color } from "../../../styles/theme";
import SmBtnAtm from "../../common/atm/SmBtnAtm";

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


  console.log(colorList)

  return (
    <>
      <PostSingleDetailBoxStyle>
        

        <SmBtnAtm color={"blue"} text="파랑" />

        {lookId.map(look => {
          console.log(look)
          return <SmBtnAtm color={"white"} text={look} key={look}/>
        })}
        

        <SmBtnAtm color={color.p_gray_lt} text={`Size ${productSize}`} />
        <SmBtnAtm color={color.p_gray_lt} text={condition} />
      </PostSingleDetailBoxStyle>
    </>
  );
}

export default PostSingleDetailOrg;
