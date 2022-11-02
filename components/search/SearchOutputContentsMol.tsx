import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React from "react";
import { color } from "../../styles/theme";
import { searchPostType } from "../../types/search/searchPostType";
import PostTmp from "../common/tmp/PostTmp";

const SearchOutputContentsMolStyle = styled.div`
  margin: 0px 18px;
  .post_class{
    font-size: 1.2rem;
    font-weight: 600;
    margin-top: 12px;
    margin-bottom: 12px;
    color: ${color.p_gray_dk}
  }

  .contents {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    div {
      margin-bottom: 3px;
      width: calc((100vw - 40px) / 2);
    }
  }
`;

function SearchOutputContentsMol(props: { postList: searchPostType[],type:string }) {
  const postList = props.postList;
  const type = props.type;
  const router = useRouter()

  return (
    <>
      <SearchOutputContentsMolStyle>
        <div className="post_class">{type}</div>
        <div className="contents">
          {postList &&
            postList.map((post) => {
              return (
                <div key={post.postId} onClick={() => router.push(`/post/${post.postId}`)}>
                  <PostTmp type="lg" imgUrl={post.imgUrl}/>
                </div>
              );
            })}
        </div>
      </SearchOutputContentsMolStyle>
    </>
  );
}

export default SearchOutputContentsMol;
