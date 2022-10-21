import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import { useRecoilValue } from "recoil";
import { CornUtils } from "../../../lib/utils/CornUtils";
import { TokenState } from "../../../states/recoil/TokenState";
import PostLgOrg from "../../common/org/PostLgOrg";

const CornMyPostListMolStyle = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
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
  const token = useRecoilValue(TokenState)
  const myPostData = CornUtils.getMyPostList(token);
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
