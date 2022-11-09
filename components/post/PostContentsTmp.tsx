import styled from "@emotion/styled";
import { useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { PostUtils } from "../../lib/utils/PostUtils";
import { TokenState } from "../../states/recoil/TokenState";
import { color } from "../../styles/theme";
import QuestionMarkAtm from "../common/atm/QuestionMarkAtm";
import { ToastUtils } from "../common/tmp/ToastTmp";
import PostCardMol from "./PostCardMol";

const PostContentsTmpStyle = styled.div`
  padding-top: 100px;
  padding-bottom: 60px;

  .no_data {
    margin-top: 30vh;
    text-align: center;
    svg {
      fill: ${color.p_gray_dk};
      width: 48px;
      height: 48px;
    }
  }

  .no_data_text {
    text-align: center;
    font-size: 0.875rem;
    color: ${color.p_gray_md};
    p {
      margin-top: 9px;
    }
  }
`;

const DummyHeight = styled.div`
  width: 100vw;
  height: 30px;
  background-color: red;
`

function PostContentsTmp(props: { tempMenu: number; setTempMenu: Function }) {
  const token = useRecoilValue(TokenState).token;
  const { tempMenu, setTempMenu } = props;
  const [tempData, setTempData] = useState<{ postId: string | number }[]>([]);
  const updatePostData = async () => {
    

    if (tempMenu === 1) {
      setTempData(await PostUtils.getRecommendPostData(token));
    } else {
      setTempData(await PostUtils.getFollowingPostData(token));
    }
  };

  const scrollRef = useRef(null)
  const isInView = useInView(scrollRef)

  useEffect(() => {
    console.log("Element is in view: ", isInView)
  }, [isInView])

  useEffect(() => {
    updatePostData(); 
    console.log('변경됨')
  }, [tempMenu]);

  if (tempData?.[0] === undefined) {
    return (
      <PostContentsTmpStyle>
        <div className="no_data">
          <QuestionMarkAtm />
        </div>
        <div className="no_data_text">
          <p>현재 팔로우한 유저가 없습니다.</p>
          <p>유저를 팔로우해 다양한 포스트를 구경하세요!</p>
        </div>
      </PostContentsTmpStyle>
    );
  }

  return (
    <>
    <PostContentsTmpStyle>
      {tempData.map((post) => {
        return (
          <div key={post.postId}>
            <PostCardMol postListData={post} postId={post.postId} />
          </div>
        );
      })}
      {/* <div ref={scrollRef} style={{"width":"100wv", "height":"30px","backgroundColor":"blue"}}></div> */}
    </PostContentsTmpStyle>
    {/* <DummyHeight/> */}
    </>
  );
}

export default PostContentsTmp;
