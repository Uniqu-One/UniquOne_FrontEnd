import styled from "@emotion/styled";
import axios from "axios";
import { useInView } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { CornUtils } from "../../../lib/utils/CornUtils";
import { TokenState } from "../../../states/recoil/TokenState";
import LoadingSpinnerAtm from "../../common/atm/LoadingSpinnerAtm";
import PostLgOrg from "../../common/org/PostLgOrg";

const CornMyPostListMolStyle = styled.div`
  padding-top: 50px;
  padding-bottom: 60px;
  .box {
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

  const [pageNum, setPageNum] = useState(0);
  const [myPostData, setMyPostData] = useState<
    { postId: number; postImg: string }[] | undefined
  >();

  const refBox = useRef(null);
  const isView = useInView(refBox, {
    margin: "-100% 0px 0px 0px",
  });

  useEffect(() => {
    if (isView === false) {
      setPageNum(pageNum + 1);
    }
  }, [isView]);

  const setMyData = async () => {
    console.log(pageNum);
    const data = await axios.get(
      `${process.env.NEXT_PUBLIC_URL_AWS}/posts/posts/listall/1?page=${pageNum}`,
      {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzeTQyMzUxM0BnbWFpbC5jb20iLCJpZCI6MSwibmlja05hbWUiOiLrsLDrtoDrpbjri6jrrLTsp4DsmYAzMyIsImVtYWlsIjoic3k0MjM1MTNAZ21haWwuY29tIiwicm9sZSI6IlJPTEVfVVNFUiIsImlhdCI6MTY2NjE0Nzc5MSwiZXhwIjoxNjY3MDExNzkxfQ.oAb6zW8DR6taLuPSOa5RArtVNR5r9KhFT4cvQKZRD1M",
        },
      }
    );

    if (myPostData === undefined) {
      setMyPostData(data.data.data.content[0]);
    } else if (myPostData !== undefined) {
      console.log(myPostData);
      setMyPostData([...myPostData, ...data.data.data.content[0]]);
    }
  };

  useEffect(() => {
    setMyData();
  }, [pageNum]);

  return (
    <CornMyPostListMolStyle>
      <div className="box" ref={refBox}>
        {myPostData === undefined && (
          <div style={{ paddingTop: "50px" }}>
            <LoadingSpinnerAtm />;
          </div>
        )}

        {myPostData !== undefined &&
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
