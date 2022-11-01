import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import { color } from "../../styles/theme";

const NotiBoxMolStyle = styled.div`
  height: 90px;
  width: 100vw;
  border: 0.5px solid ${color.p_gray_lt};
  display: flex;
  justify-content: space-between;

  div{
    margin: auto 0;
  }

  .left{
    margin-left: 18px;
    display: flex;

    .profile_img{
      border-radius: 100%;
      border: 0.5px solid ${color.p_gray_lt};
      img{
        border-radius: 100%;
        
      }
      margin-right: 12px;
    }
  }
  .right{
    margin-right: 18px;
    img{
      border-radius: 9px;
      
    }
  }
`;

// notiType : COOL, COMMENT, FOLLOW, QNA, // OFFER(오퍼 받았을 때), OFFER_REFUSE OFFER_ACCEPT

function NotiBoxMol(props: { noti: {} }) {
  const noti = props.noti;

  return (
    <NotiBoxMolStyle>
      
      <div className="left">
        <div className="profile_img">
          <Image src={"/assets/images/sad_corn_img.jpg"} alt='profileImage' width={60} height={60}/>
        </div>

        <div className="box_contents">내용</div>
      </div>

      <div className="right">
      <Image src={"/assets/images/postImage.jpg"} alt='profileImage' width={60} height={60}/>
      </div>
    </NotiBoxMolStyle>
  );
}

export default NotiBoxMol;
