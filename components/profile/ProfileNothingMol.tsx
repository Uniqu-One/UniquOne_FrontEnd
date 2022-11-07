import styled from "@emotion/styled";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { color } from "../../styles/theme";
import BtnTmp from "../common/tmp/BtnTmp";

const ProfileNothingMolStyle = styled.div`
  padding-top: 50px;
  text-align: center;
  div {
    p {
      color: ${color.p_gray_md};
      margin: 12px;
      font-size: 0.875rem;
    }
    :last-of-type {
      p {
        color: white;
      }
    }
  }
`;

function ProfileNothingMol() {

  const router = useRouter()

  return (
    <ProfileNothingMolStyle>
      <div>
        <Image  
          src="/assets/images/sad_corn_img.jpg"
          alt="sad_corn"
          width={240}
          height={240}
        />
      </div>
      <div>
        <p>생성된 콘이 없습니다.</p>
      </div>
      <div>
        <p>내 콘을 생성해 나만의 프로필을 만들어보세요!</p>
      </div>
      <div className="corn_reg_btn" onClick={() => router.push('/corn/reg')}>
        <BtnTmp size="lg" value="나의 콘 만들러 가기" status={true} />
      </div>
    </ProfileNothingMolStyle>
  );
}

export default ProfileNothingMol;
