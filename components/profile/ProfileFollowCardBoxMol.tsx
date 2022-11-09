import styled from "@emotion/styled";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { FollowUtils } from "../../lib/utils/FollowUtils";
import { ToastUtils } from "../common/tmp/ToastTmp";import { TokenState } from "../../states/recoil/TokenState";
import { color } from "../../styles/theme";
import { followListType } from "../../types/follow/followListType";
import QuestionMarkAtm from "../common/atm/QuestionMarkAtm";
import UserImgAtm from "../common/atm/UserImgAtm";
import ProfileFollowCardSingleMol from "./ProfileFollowCardSingleMol";

const ProfileFollowCardBoxMolStyle = styled.div`
  margin-top: 6px;

  display: flex;
  justify-content: space-between;
  padding: 6px 24px;
  color: ${color.p_gray_dk};

  div {
    margin: auto 0;
  }

  .corn_img_name {
    display: flex;
    div {
      :last-of-type {
        padding-left: 12px;
      }
    }
    p {
      font-size: 0.875rem;
      color: ${color.p_gray_dk};
    }
  }

  .follow_btn {
    p{
      font-size: 0.875rem;
    }
    /* border: 0.5px solid ${color.p_gray_md}; */
    background-color: ${color.p_gray_lt};
    padding: 9px 18px;
    border-radius: 9px;
    font-weight: 500;
  }

  .check {
    border: none;
    background-color: ${color.p_pruple};
    color: white;
  }

  .no-data {
    width: 100%;
    text-align: center;
    margin-top: 20vh;
    svg {
      fill: ${color.p_gray_md};
      width: 60px;
      height: 60px;
    }
    p{
      margin-top: 9px;
      font-size: 0.875rem;
    }
  }

  .user_info{
    p{
    :first-of-type{
    color: ${color.p_gray_dk};
    font-weight: 500;
    }
    :last-of-type{
      margin-top: 6px;
      font-size: 0.875rem;
      color: ${color.p_gray_md};
    }
  }  
  }
`;

function ProfileFollowCardBoxMol(props: { tempUserData: followListType[]}) {
  const token = useRecoilValue(TokenState).token
  const { tempUserData } = props;

  if (tempUserData[0] === undefined) {
    return (
      <ProfileFollowCardBoxMolStyle>
        <div className="no-data">
          <QuestionMarkAtm />
          <p>팔로워가 없습니다</p>
        </div>
      </ProfileFollowCardBoxMolStyle>
    );
  }


  return (
    <>
      {tempUserData.map((user, idx) => {


        return (
          <ProfileFollowCardBoxMolStyle key={idx}>
            <ProfileFollowCardSingleMol user={user}/>
          </ProfileFollowCardBoxMolStyle>
        );
      })}
    </>
  );
}

export default ProfileFollowCardBoxMol;
