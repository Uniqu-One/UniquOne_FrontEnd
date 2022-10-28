import styled from "@emotion/styled";
import Link from "next/link";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { ProfileUtils } from "../../lib/utils/ProfileUtils";
import { ToastUtils } from "../../lib/utils/ToastUtils";
import { TokenState } from "../../states/recoil/TokenState";
import { UserInfoState } from "../../states/recoil/UserInfoState";
import { color, styleColor } from "../../styles/theme";
import BtnTmp from "../common/tmp/BtnTmp";
import ProfileBoxTopMol from "./ProfileBoxTopMol";
import ProfileBoxUnderMol from "./ProfileBoxUnderMol";
import ProfileNothingMol from "./ProfileNothingMol";

const ProfileBoxTmpStyle = styled.div`
  padding-top: 50px;
  margin: 0 18px;
  > div {
    :first-of-type {
      margin-top: 12px;
      margin-bottom: 21px;
    }

    :nth-of-type(2) {
      line-height: 1.1rem;
      font-size: 0.875rem;
      color: ${color.p_gray_dk};
    }
    :nth-of-type(3) {
      margin-top: 9px;
      margin-bottom: 18px;
      a {
        color: ${styleColor.purple};
      }
    }
  }
`;

function ProfileBoxTmp(props: { type: string; userId?: string }) {
  const token = useRecoilValue(TokenState).token;
  const { cornId } = useRecoilValue(UserInfoState);
  const [followStatus, setFollowStatus] = useState(false);

  const handleFollowBtn = () => {
    if (followStatus === false) {
      ToastUtils.success("팔로우를 하였습니다.");
      setFollowStatus(true);
    } else {
      ToastUtils.error("팔로우를 하였습니다.");
      setFollowStatus(false);
    }
  };

  //TODO - cornID로 변경해야함
  const profileBoxData = ProfileUtils.getProfileData(token, cornId);

  if (!cornId) {
    return <ProfileNothingMol />;
  } else if (profileBoxData === "Loading") {
    return <div>로딩중</div>;
  } else {
    return (
      <>
        <ProfileBoxTmpStyle>
          <ProfileBoxTopMol type={props.type} profileBoxData={profileBoxData} />
          <ProfileBoxUnderMol
            desc={profileBoxData?.dsc || ""}
            link={profileBoxData?.url || ""}
          />
        </ProfileBoxTmpStyle>
        {props.type === "my" && (
          <div>
            <Link href="/corn/edit">
              <a>
                <BtnTmp size="default" value="콘 수정" />
              </a>
            </Link>
          </div>
        )}
        {props.type === "other" && (
          <div onClick={() => handleFollowBtn()}>
            <BtnTmp
              size="lg"
              value={followStatus ? "팔로우" : "팔로잉"}
              status={followStatus}
            />
          </div>
        )}
      </>
    );
  }
}

export default ProfileBoxTmp;
