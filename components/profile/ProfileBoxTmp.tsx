import styled from "@emotion/styled";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { FollowUtils } from "../../lib/utils/FollowUtils";
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

function ProfileBoxTmp(props: { type: string; cornId?: string }) {
  const token = useRecoilValue(TokenState).token;
  
  const [followStatus, setFollowStatus] = useState<undefined|boolean>();

  const handleFollowBtn = () => {
    if (followStatus === false) {
      FollowUtils.registerFollow(token,props.cornId)
      ToastUtils.success("팔로우를 하였습니다.");
      setFollowStatus(true);
    } else {
      FollowUtils.cancelFollow(token,props.cornId)
      ToastUtils.error("팔로우를 취소하였습니다.");
      setFollowStatus(false);
    }
  };

  const profileBoxData = ProfileUtils.getProfileData(token, props.cornId);

  useEffect(() => {

    setFollowStatus(!profileBoxData.isFollow)

  },[profileBoxData])


  if (!profileBoxData) {
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
