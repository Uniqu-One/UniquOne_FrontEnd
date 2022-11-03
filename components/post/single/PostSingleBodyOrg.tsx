import styled from "@emotion/styled";
import React from "react";
import { color } from "../../../styles/theme";
import PostSingleDetailOrg from "./PostSingleDetailOrg";
import PostSingleTagMol from "./PostSingleTagMol";

const PostSingleBodyOrgStyle = styled.div`
  margin: 0 18px;
  font-size: 0.85rem;
  > h2 {
    font-weight: 700;
    margin-bottom: 12px;
  }
  > p {
    line-height: 1.05rem;
  }

  > div {
    :first-of-type {
      display: flex;
      flex-wrap: wrap;
      margin-top: 18px;
      p {
        margin-right: 6px;
        color: ${color.p_gray_md};
      }
    }
  }
`;

function PostSingleBodyOrg(props: { userId: string, postDetailData:any }) {

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
    imgUrlList
  } = props.postDetailData;

  console.log(imgUrlList)

  return (
    <>
      <PostSingleBodyOrgStyle>
        <h2>{props.userId}</h2>
        <h3>{title}</h3>
        <p>{dsc}</p>

        <div>
          {/* @ts-ignore */}
          {postTagList.map((tag, idx) => {
            return <PostSingleTagMol key={idx} tag={tag} />;
          })}
        </div>

        <PostSingleDetailOrg postDetailData={props.postDetailData}/>
      </PostSingleBodyOrgStyle>
    </>
  );
}

export default PostSingleBodyOrg;
