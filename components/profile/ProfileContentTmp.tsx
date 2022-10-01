import styled from "@emotion/styled";
import React, { useState } from "react";
import { color } from "../../styles/theme";
import PostMdOrg from "../common/org/PostMdOrg";

const ProfileContentTmpStyle = styled.div`
  overflow: hidden;

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
  const tabs = ["전체", "상품", "스타일"];
  const [tempTab, setTempTab] = useState(0);

  console.log(tempTab);

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
          {tempTab === 0 && <PostMdOrg />}

          {tempTab === 1 && (
            <>
              <PostMdOrg />
              <PostMdOrg />
            </>
          )}

          {tempTab === 2 && <PostMdOrg />}
        </ProfileContentsStyle>
      </ProfileContentTmpStyle>
    </>
  );
}

export default ProfileContentTmp;
