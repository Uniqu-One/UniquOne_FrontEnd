import styled from "@emotion/styled";
import axios from "axios";
import { useInView } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { TokenState } from "../../../states/recoil/TokenState";
import { UserInfoState } from "../../../states/recoil/UserInfoState";
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
  const token = useRecoilValue(TokenState).token;
  const cornId = useRecoilValue(UserInfoState).cornId

  const [pageNum, setPageNum] = useState(-1);
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

    const myPostListdata = await axios.get(
      `${process.env.NEXT_PUBLIC_URL_AWS}/posts/posts/listall/${cornId}?page=${pageNum}`,
      {
        headers: {
          Authorization: token,
        },
      }
    ).then(res => {
      return res.data.data.content[0]
    });

    if (myPostData === undefined) {
      setMyPostData(myPostListdata);
    } else if (myPostData !== undefined) {
      setMyPostData([...myPostData, ...myPostListdata]);
    }
  };

  useEffect(() => {
    if(cornId){
      setMyData();
    }
  }, [pageNum,cornId]);

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
