import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useRecoilValue } from "recoil";
import { ProfileUtils } from "../../lib/utils/ProfileUtils";
import { TokenState } from "../../states/recoil/TokenState";
import { color, styleColor } from "../../styles/theme";
import BtnTmp from "../common/tmp/BtnTmp";
import ProfileBoxTopMol from "./ProfileBoxTopMol";
import ProfileBoxUnderMol from "./ProfileBoxUnderMol";

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

function ProfileBoxTmp(props: { type: string,userId ?: string }) {
  const token = useRecoilValue(TokenState).token
  const {type,userId} = props
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

  //TODO - 라우팅으로 밝혀내야함
  const profileBoxData = ProfileUtils.getProfileData(token,userId);

  console.log(profileBoxData)

  if (profileBoxData === "Loading") {
    return <div>로딩중</div>;
  } else if(profileBoxData === undefined){
    return <div>유저 정보가 없습니다.</div>
  } 
  
  else {
    return (
      <>
        <Toaster />
        <ProfileBoxTmpStyle >
          <ProfileBoxTopMol type={props.type} profileBoxData={profileBoxData}/>
          <ProfileBoxUnderMol
            desc={profileBoxData.dsc}
            link={profileBoxData.url}
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
              value={followStatus ? "팔로우" : "팔로잉6"}
              status={followStatus}
            />
          </div>
        )}
      </>
    );
  }
}

export default ProfileBoxTmp;
  