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
        margin-left: 3px;
        margin-right: 9px;
        font-weight: 700;
      }
    }
  }
`;

function ProfileBoxTopMol(props: { type: string, profileBoxData:ProfileDataType,cornId?:string }) {
  const router = useRouter();
  const {cornId} = props

  const {postEA, followerEA,followingEA,imgUrl,reviewEA,title} = props.profileBoxData

  

  return (
    <>
      <ProfileBoxTopMolStyle>
        <div>
          <UserImgAtm width={78} height={78} url={imgUrl}/>
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
                  <span>★★★★★</span>{'('}{reviewEA}{')'}
                </a>
              </Link>
            </div>
          </div>

          <div className="userInfo_tail">
            <p>
              포스트<span>{postEA}</span>
            </p>
            <Link href={{
              pathname : "/my/follow",
              query : {click : "follow"}
            }}>
              <a>
                팔로워<span>{followerEA}</span>
              </a>
            </Link>
            <Link href={"/my/follow"}>
              <a>
                팔로잉<span>{followingEA}</span>
              </a>
            </Link>
          </div>
        </div>
      </ProfileBoxTopMolStyle>
    </>
  );
}

export default ProfileBoxTopMol;
