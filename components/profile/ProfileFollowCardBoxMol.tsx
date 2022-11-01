import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import { color } from "../../styles/theme";
import { followListType } from "../../types/follow/followListType";
import UserImgAtm from "../common/atm/UserImgAtm";

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
    p{
      font-size: 0.875rem;
      color: ${color.p_gray_dk};
    }
  }

  .follow_btn {
    border: 0.5px solid ${color.p_gray_md};
    padding: 9px 18px;
    border-radius: 9px;
    font-weight: 500;
  }

  .check {
    border: none;
    background-color: ${color.p_pruple};
    color: white;
  }
`;

function ProfileFollowCardBoxMol(props: { tempUserData: followListType[] }) {
  const { tempUserData } = props;
  const status = true;

  if (tempUserData[0] === undefined) {
    return <div>정보 없음</div>;
  }

  return (
    <>
      {tempUserData.map((user,idx) => {
        return <ProfileFollowCardBoxMolStyle key={idx}>
          <Link href="/#">
            <a>
              <div className="corn_img_name">
                <UserImgAtm width={48} height={48} url={user.cornImgUrl}/>
                <div>
                  <p>{user.cornTitle} {user.userName}</p>
                </div>
              </div>
            </a>
          </Link>
          <div className={`follow_btn ${status ? "check" : null}`}>
            <p>{status ? "팔로우" : "팔로잉"}</p>
          </div>
        </ProfileFollowCardBoxMolStyle>;
      })}
    </>
  );
}

export default ProfileFollowCardBoxMol;
