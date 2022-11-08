import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
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
      margin:6px;

    }
  }
`;

function CornMyPostListMol() {
  const token = useRecoilValue(TokenState).token;


  //TODO - paiging
  const [tempMyPostList, setTempMyPostList] = useState([]);
  const router = useRouter()
  const updateMyPostData = async () => {
    setTempMyPostList(await CornUtils.getMyPostList(token));
  };

  useEffect(() => {
    updateMyPostData();
  }, []);


  return (
    <CornMyPostListMolStyle>
      <div className="box">
        {tempMyPostList === undefined && (
          <div style={{ paddingTop: "50px" }}>
            <LoadingSpinnerAtm />;
          </div>
        )}

        

        {tempMyPostList !== undefined &&
          tempMyPostList.map((post: { postId: number; postImg: string }) => {
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
