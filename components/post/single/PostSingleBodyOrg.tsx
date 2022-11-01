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

const desc =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const tags = ["길게길게", "적으면은", "으띃게", "태그들이완성이", "될런지요"];

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
  } = props.postDetailData;


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
