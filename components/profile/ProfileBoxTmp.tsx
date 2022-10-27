import styled from "@emotion/styled";
import Link from "next/link";
import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useRecoilValue } from "recoil";
import { ProfileUtils } from "../../lib/utils/ProfileUtils";
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
  const { userId, cornId } = useRecoilValue(UserInfoState);
  console.log(userId)
  const { type } = props;
  const [followStatus, setFollowStatus] = useState(false);
  const toastSuccess = () => toast.success("팔로우를 하였습니다!");
  const toastError = () => toast.error("팔로우를 취소했습니다.");

  const handleFollowBtn = () => {
    if (followStatus === false) {
      toastSuccess();
      setFollowStatus(true);
    } else {
      toastError();
      setFollowStatus(false);
    }
  };

  //TODO - cornID로 변경해야함
  const profileBoxData = ProfileUtils.getProfileData(token, userId);

  if (!cornId) {
    return <ProfileNothingMol />;
  } else if (profileBoxData === "Loading") {
    return <div>로딩중</div>;
  } else {
    return (
      <>
        <Toaster />
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
