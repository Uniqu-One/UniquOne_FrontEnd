import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import { CornUtils } from "../../../lib/utils/CornUtils";
import PostLgOrg from "../../common/org/PostLgOrg";

const CornMyPostListMolStyle = styled.div`
  padding-top: 50px;
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-left: 3px;
    margin-right: 3px;
    margin-top: 3px;
    a{
      width: 50%;
    }
  }

`;

function CornMyPostListMol() {
  const myPostData = CornUtils.getMyPostList();
  return (
    <CornMyPostListMolStyle>
      <div>
        {myPostData &&
          myPostData.map((post:{postId:number,postImg:string}) => {
            return (
              <Link href={`/corn/list/${post.postId}`} key={post.postId}>
                <a>
                  <PostLgOrg imgSrc={post.postImg}/>
                </a>
              </Link>
            );
          })}

      </div>
    </CornMyPostListMolStyle>
  );
}

export default CornMyPostListMol;
