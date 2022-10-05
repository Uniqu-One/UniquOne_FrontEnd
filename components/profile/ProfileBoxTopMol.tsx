import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
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

function ProfileBoxTopMol(props: { type: string }) {

  const router = useRouter()
  const userId = router.query.userId

  return (
    <>
      <ProfileBoxTopMolStyle>
        <div>
          <UserImgAtm width={78} height={78} />
        </div>

        <div className="userInfo">
          <div className="userInfo_head">
            <div>
              <h3>폼폼푸린 덕후샵</h3>
            </div>
            <div>
              <Image
                src="/assets/icons/uniquOneLogo.svg"
                alt="logo icon"
                width={20}
                height={20}
              />
            </div>
            <div>
              <Link href={props.type==="my" ? "/my/review":`/profile/${userId}/review`}>
                <a>
                  <span>★★★★★</span>(7)
                </a>
              </Link>
            </div>
          </div>

          <div className="userInfo_tail">
            <p>
              포스트<span>123</span>
            </p>
            <p>
              팔로워<span>1423</span>
            </p>
            <p>
              팔로잉<span>1523</span>
            </p>
          </div>
        </div>
      </ProfileBoxTopMolStyle>
    </>
  );
}

export default ProfileBoxTopMol;
