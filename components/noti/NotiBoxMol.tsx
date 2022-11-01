import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import { color } from "../../styles/theme";
import { notiListType } from "../../types/noti/notiListType";

const NotiBoxMolStyle = styled.div`
  height: 90px;
  width: 100vw;
  border: 0.5px solid ${color.p_gray_lt};
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
    width: calc(100vw - 178px);
    font-size: 0.875rem;
    color: ${color.p_gray_dk};
  }

  .time{
    margin-top: 6px;
    color: ${color.p_gray_md};
  }
`;

// notiType : COOL, COMMENT, FOLLOW, QNA, // OFFER(오퍼 받았을 때), OFFER_REFUSE OFFER_ACCEPT

function NotiBoxMol(props: { noti: notiListType }) {
  const noti = props.noti;

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
  } = props.noti;

  console.log(props.noti)

  return (
    <NotiBoxMolStyle>
      <div className="left">
        <div className="profile_img">
          <Image
            src={userCornImg ? userCornImg :"/assets/images/sad_corn_img.jpg"}
            alt="profileImage"
            width={60}
            height={60}
          />
        </div>

        <div className="box_contents">
          <p>
            {nickName} {dsc}
          </p>
          <p className="time">
            {regDate}
          </p>
        </div>
      </div>

      <div className="right">
        <Image
          src={postImg? postImg: "/assets/images/postImage.jpg"}
          alt="profileImage"
          width={60}
          height={60}
        />
      </div>
    </NotiBoxMolStyle>
  );
}

export default NotiBoxMol;
