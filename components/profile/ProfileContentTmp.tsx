import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { PostUtils } from "../../lib/utils/PostUtils";
import { TokenState } from "../../states/recoil/TokenState";
import { color } from "../../styles/theme";
import { postDataType } from "../../types/postDataType";
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
        color: ${color.p_gray_dk};
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
`;

export const ProfileContentsStyle = styled.div`
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
`;

function ProfileContentTmp() {
  const token = useRecoilValue(TokenState);
  const tabs = ["전체", "상품", "스타일"];
  const [tempTab, setTempTab] = useState(0);
  const [tempPostList, setTempPostList] = useState([]);

  const getMyAllPostData = async () => {
    setTempPostList(await PostUtils.getMyPostList(token, 1));
  };

  const getMySellData = async () => {
    setTempPostList(await PostUtils.getMySellPostList(token, 1));
  };

  const getMyStyleData = async () => {
    setTempPostList(await PostUtils.getMyStylePostList(token, 1));
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

  return (
    <>
      <ProfileContentTmpStyle>
        <div className="ProfileTabs">
          {tabs.map((tab, idx) => (
            <div key={idx} onClick={() => setTempTab(idx)}>
              {tempTab === idx ? <h3>{tab}</h3> : <h4>{tab}</h4>}
            </div>
          ))}
        </div>
        <ProfileContentsStyle>
          {tempPostList.map(
            (post: { postId: number; postImg: string; postType: string }) => {
              return <PostMdOrg key={post.postId} post={post} />;
            }
          )}
        </ProfileContentsStyle>
      </ProfileContentTmpStyle>
    </>
  );
}

export default ProfileContentTmp;
