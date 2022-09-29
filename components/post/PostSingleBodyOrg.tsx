import styled from "@emotion/styled";
import React from "react";
import { color } from "../../styles/theme";
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

function PostSingleBodyOrg(props: { userId: string }) {
  return (
    <>
      <PostSingleBodyOrgStyle>
        <h2>{props.userId}</h2>
        <p>{desc}</p>
{/* TODO - 여기 Org로 묶고 props내려서 처리해서 깔끔하게 바꾸기 */}
        <div>
          {tags.map((tag, idx) => {
            return <PostSingleTagMol key={idx} tag={tag} />;
          })}
        </div>

        <PostSingleDetailOrg />
      </PostSingleBodyOrgStyle>
    </>
  );
}

export default PostSingleBodyOrg;
