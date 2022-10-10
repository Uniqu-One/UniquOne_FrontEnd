import styled from "@emotion/styled";
import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { color, styleColor } from "../../styles/theme";
import BtnTmp from "../common/tmp/BtnTmp";
import ProfileBoxTopMol from "./ProfileBoxTopMol";
import ProfileBoxUnderMol from "./ProfileBoxUnderMol";

const ProfileBoxTmpStyle = styled.div`
  margin: 18px 18px 0px 18px;
  > div {
    :first-of-type {
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
      color: ${styleColor.blue};
    }
  }
`;

function ProfileBoxTmp(props: { type: string }) {

  const [followStatus, setFollowStatus] = useState(false)
  const toastSuccess = () => toast.success("팔로우를 하였습니다!")
  const toastError = () => toast.error("팔로우를 취소했습니다.")

  const handleFollowBtn = () => { 

    if(followStatus === false){
      toastSuccess()
      setFollowStatus(true)
    } else {
      toastError()
      setFollowStatus(false)
    }

    
  }

  return (
    <>
    <Toaster/>
      <ProfileBoxTmpStyle>
        <ProfileBoxTopMol type={props.type}/>
        <ProfileBoxUnderMol />
      </ProfileBoxTmpStyle>
      {props.type === "my" && (
        <div>
          <BtnTmp size="default" value="콘 수정" />
        </div>
      )}
      {props.type === "other" && (
        <div onClick={()=>handleFollowBtn()}>
          <BtnTmp size="lg" value={followStatus ? "팔로우" : "팔로잉"} status={followStatus}/>
        </div>
      )}
    </>
  );
}

export default ProfileBoxTmp;
