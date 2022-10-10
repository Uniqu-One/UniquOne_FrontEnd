import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import { color } from "../../styles/theme";
import UserImgAtm from "../common/atm/UserImgAtm";
import BtnTmp from "../common/tmp/BtnTmp";

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
  }

  

  .follow_btn {
    border: 0.5px solid ${color.p_gray_md};
    padding: 9px 18px;
    border-radius: 9px;
    font-weight: 500;
  }

  .check{
    border: none;
    background-color: ${color.p_pruple};
    color: white;
  }
`;

function ProfileFollowCardBoxMol() {
  //props 콘 이름, 유저네임, 팔로우 상태
  const status = true
  return (
    <>
      <Link href="/#">
        <a>
          <ProfileFollowCardBoxMolStyle>
            <div className="corn_img_name">
              <UserImgAtm width={48} height={48} />
              <div>
                <p>콘 이름 과 유저네임</p>
              </div>
            </div>

            <div className={`follow_btn ${status ? "check" : null}`}>
              <p>{status ? "팔로우" : "팔로잉"}</p>
            </div>
          </ProfileFollowCardBoxMolStyle>
        </a>
      </Link>
    </>
  );
}

export default ProfileFollowCardBoxMol;
