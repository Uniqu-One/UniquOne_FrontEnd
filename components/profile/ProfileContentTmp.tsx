import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { PostUtils } from "../../lib/utils/PostUtils";
import { TokenState } from "../../states/recoil/TokenState";
import { UserInfoState } from "../../states/recoil/UserInfoState";
import { color } from "../../styles/theme";
import { postDataType } from "../../types/postDataType";
import QuestionMarkAtm from "../common/atm/QuestionMarkAtm";
import PostMdOrg from "../common/org/PostMdOrg";

const ProfileContentTmpStyle = styled.div`
  overflow: hidden;

  padding-bottom: 60px;

  .ProfileTabs {
    
    margin-top: 12px;
    margin-bottom: 3px;
    height: 42px;
    display: flex;
    justify-content: center;
    line-height: 42px;
    border-bottom: 0.5px solid ${color.p_gray_md};

    div {
      margin: 0px 6px;
      width: calc((100vw - 6px) / 3);
      text-align: center;
      font-weight: 600;
      h3 {
        color: ${color.p_pruple};
        font-weight: 750;
      }
      h4 {
        color: ${color.p_gray_md};
      }
    }
  }

  .ProfileContents {
    
    :last-of-type {
      display: flex;
      flex-wrap: wrap;
      div {
        margin-bottom: 3px;
        :nth-of-type(3n-2) {
          margin-right: 3px;
        }
        :nth-of-type(3n-1) {
          margin-right: 3px;
        }
      }
    }
  }

  .question_mark {
    text-align: center;
    margin-top: 20vh;
    svg {
      fill: ${color.p_gray_md};
      width: 60px;
      height: 60px;
    }
    p {
      font-size: 0.875rem;
      margin-top: 9px;
      color: ${color.p_gray_md};
    }
  }
`;

export const ProfileContentsStyle = styled.div`

.container{
  
  display: flex;
  flex-wrap: wrap;
}
  div {
    margin-bottom: 3px;
    :nth-of-type(3n-2) {
      margin-right: 3px;
    }
    :nth-of-type(3n-1) {
      margin-right: 3px;
    }
  }
  .no-data{
    
    
    margin: auto;
    text-align: center;
    margin-top: 24vh;
    color: ${color.p_gray_md};
    font-size: 0.875rem;
    svg{
      width: 64px;
      height: 64px;
      fill: ${color.p_gray_md};
    }
    p{
      margin-top: 6px;
    }

  }
`;

function ProfileContentTmp() {
  const token = useRecoilValue(TokenState).token;
  const tabs = ["전체", "상품", "스타일"];
  const { cornId } = useRecoilValue(UserInfoState);
  const [tempTab, setTempTab] = useState(0);
  const [tempPostList, setTempPostList] = useState([]);

  const getMyAllPostData = async () => {
    setTempPostList(await PostUtils.getMyPostList(token, 0));
  };

  const getMySellData = async () => {
    setTempPostList(await PostUtils.getMySellPostList(token, 0));
  };

  const getMyStyleData = async () => {
    setTempPostList(await PostUtils.getMyStylePostList(token, 0));
  };

  useEffect(() => {
    if (tempTab === 0) {
      getMyAllPostData();
    } else if (tempTab === 1) {
      getMySellData();
    } else if (tempTab === 2) {
      getMyStyleData();
    }
  }, [tempTab]);

  if (tempPostList === undefined) {
    return (<>
      <ProfileContentTmpStyle>
        <div className="question_mark">
          <QuestionMarkAtm />
          <p>업로드된 포스트가 없어요!</p>
        </div>
      </ProfileContentTmpStyle>
      </>
    );
  }



  return (
    <div>
      <ProfileContentTmpStyle>
        <div className="ProfileTabs">
          {tabs.map((tab, idx) => (
            <div key={idx} onClick={() => setTempTab(idx)}>
              {tempTab === idx ? <h3>{tab}</h3> : <h4>{tab}</h4>}
            </div>
          ))}
        </div>

        <ProfileContentsStyle>
          <div className="container">
          {tempPostList && tempPostList.map(
            (post: { postId: number; postImg: string; postType: string }) => {
              return <PostMdOrg key={post.postId} post={post} />;
            }
          )}
          </div>
        </ProfileContentsStyle>
      </ProfileContentTmpStyle>
    </div>
  );
}

export default ProfileContentTmp;
