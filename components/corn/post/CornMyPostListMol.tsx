import styled from "@emotion/styled";
import { useInView } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { CornUtils } from "../../../lib/utils/CornUtils";
import { TokenState } from "../../../states/recoil/TokenState";
import LoadingSpinnerAtm from "../../common/atm/LoadingSpinnerAtm";
import PostLgOrg from "../../common/org/PostLgOrg";

const CornMyPostListMolStyle = styled.div`
  padding-top: 50px;
  padding-bottom: 60px;

  div {
    background-color: blue;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-left: 3px;
    margin-right: 3px;
    margin-top: 3px;
    a {
      width: 50%;
    }
  }
`;

function CornMyPostListMol() {
  const token = useRecoilValue(TokenState);
  const myPostData = CornUtils.getMyPostList(token);

  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-800px 0 0 0",
  });

  useEffect(() => {
    console.log(isInView, "in");
  }, [isInView]);


  if (myPostData === "Loading") {
    return (
      <div>
        <LoadingSpinnerAtm />;
      </div>
    );
  }

  return (
    <CornMyPostListMolStyle>
      <div ref={ref} style={{ height: "101vh" }}>
        {myPostData &&
          myPostData.map((post: { postId: number; postImg: string }) => {
            return (
              <Link href={`/corn/list/${post.postId}`} key={post.postId}>
                <a>
                  <PostLgOrg imgSrc={post.postImg} />
                </a>
              </Link>
            );
          })}
      </div>
    </CornMyPostListMolStyle>
  );
}

export default CornMyPostListMol;
