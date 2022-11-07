import styled from "@emotion/styled";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { color } from "../../styles/theme";
import { notiListType } from "../../types/noti/notiListType";
import FollowBtnAtm from "../common/atm/FollowBtnAtm";

const NotiBoxMolStyle = styled.div`
  height: 90px;
  width: 100vw;
  border-bottom: 0.5px solid ${color.p_gray_md};
  display: flex;
  justify-content: space-between;

  div {
    margin: auto 0;
  }

  .left {
    margin-left: 18px;
    display: flex;

    .profile_img {
      border-radius: 100%;
      border: 0.5px solid ${color.p_gray_lt};
      img {
        border-radius: 100%;
      }
      margin-right: 12px;
    }
  }
  .right {
    margin-right: 18px;
    img {
      border-radius: 9px;
    }
  }

  .box_contents {
    width: calc(100vw - 196px);
    font-size: 0.875rem;
    color: ${color.p_gray_dk};
  }

  .time {
    margin-top: 6px;
    color: ${color.p_gray_md};
  }

  .follow_btn {
    h3 {
      font-size: 0.8rem;
      font-weight: 500;
      padding: 12px 6px;
    }
    width: 60px;
    margin-right: 24px;
  }
`;

// notiType : COOL, COMMENT, FOLLOW, QNA, // OFFER(오퍼 받았을 때), OFFER_REFUSE OFFER_ACCEPT

function NotiBoxMol(props: { noti: notiListType }) {
  const router = useRouter();

  const {
    dsc,
    isCheck,
    nickName,
    notiId,
    notiType,
    postImg,
    regDate,
    typeId,
    userCornImg,
    isFollow,
  } = props.noti;

  const handlePushChange = () => {
    if (notiType === "COMMENT") {
      router.push(`/post/${typeId}/comment`);
    }
  };

  return (
    <NotiBoxMolStyle onClick={() => handlePushChange()}>
      <div className="left">
        <div className="profile_img">
          <Image 
            src={userCornImg ? userCornImg : "/assets/images/sad_corn_img.jpg"}
            alt="profileImage"
            width={60}
            height={60}
          />
        </div>

        <div className="box_contents">
          <p>
            {nickName}
            {dsc}
          </p>
          <p className="time">{regDate}</p>
        </div>
      </div>

      {notiType === "FOLLOW" && (
        <div className="follow_btn">
          <FollowBtnAtm follow={isFollow} />
        </div>
      )}

      {notiType === "OFFER_ACCEPT" && (
        <div className="right">
          <Image 
            src={postImg ? postImg : "/assets/images/postImage.jpg"}
            alt="profileImage"
            width={60}
            height={60}
          />
        </div>
      )}

      {notiType === "COMMENT" && (
        <div className="right">
          <Image 
            src={postImg ? postImg : "/assets/images/postImage.jpg"}
            alt="profileImage"
            width={60}
            height={60}
          />
        </div>
      )}
    </NotiBoxMolStyle>
  );
}

export default NotiBoxMol;
