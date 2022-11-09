import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { ProfileDataType } from "../../lib/utils/ProfileUtils";
import { color } from "../../styles/theme";
import UserImgAtm from "../common/atm/UserImgAtm";

const ProfileBoxTopMolStyle = styled.div`
  /* background-color: lightblue; */
  display: flex;
  div {
    margin: auto 0;
  }
  .userInfo {
    margin-left: 12px;
    color: ${color.p_gray_dk};
    div {
      display: flex;
      margin: 6px 0px;
    }
    .userInfo_head {
      /* background-color: lightseagreen; */
      line-height: 20px;
      h3 {
        color: black;
        font-weight: 750;
        margin-right: 3px;
      }

      span {
        color: ${color.p_pruple};
      }
    }

    .userInfo_tail {
      span {
        .EA{
          margin-left: 3px;
          margin-right: 9px;
          font-weight: 700;
        }
      }
    }
  }
`;

function ProfileBoxTopMol(props: {
  type: string;
  profileBoxData: ProfileDataType;
  cornId?: string;
}) {
  const router = useRouter();
  const { cornId, type } = props;

  const { postEA, followerEA, followingEA, imgUrl, reviewEA, title } =
    props.profileBoxData;

  console.log(type);

  const handleMoveFollowPage = () => {
    if (type === "my") {
      router.push("/my/follow");
    }

    if (type === "other") {
      router.push(`/profile/${cornId}/follow`);
    }
  };

  return (
    <>
      <ProfileBoxTopMolStyle>
        <div>
          <UserImgAtm width={78} height={78} url={imgUrl} />
        </div>

        <div className="userInfo">
          <div className="userInfo_head">
            <div>
              <h3>{title}</h3>
            </div>
            <div>
              <img
                src="/assets/icons/uniquOneLogo.svg"
                alt="logo icon"
                width="20px"
                height="20px"
              />
            </div>
            <div>
              <Link
                href={
                  props.type === "my"
                    ? "/my/review"
                    : `/profile/${cornId}/review`
                }
              >
                <a>
                  <span>★★★★★</span>
                  {"("}
                  {reviewEA}
                  {")"}
                </a>
              </Link>
            </div>
          </div>

          <div className="userInfo_tail">
            <span>
              포스트<span className="EA">{postEA===null ? 0 : postEA}</span>
            </span>
            <span onClick={() => handleMoveFollowPage()}>
              팔로워<span className="EA">{followerEA}</span>
            </span>
            <span onClick={() => handleMoveFollowPage()}>
              팔로잉<span className="EA">{followingEA}</span>
            </span>
          </div>
        </div>
      </ProfileBoxTopMolStyle>
    </>
  );
}

export default ProfileBoxTopMol;
