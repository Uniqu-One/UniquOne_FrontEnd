import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import { color } from "../../styles/theme";

const MainRecOneUserMolStyle = styled.div`
  border-radius: 9px;
  width: 100%;
  height: 162px;
  background-color: ${color.p_gray_md};

  text-align: center;

  > div {
    img {
      border-radius: 6px;
    }

    :first-of-type {
      padding-top: 18px;
      padding-bottom: 12px;
      /* background-color: red; */
    }
  }

  p {
    display: inline-block;
    width: 216px;
    color: white;
    font-weight: 600;
    line-height: 1.3;
  }
`;

function MainRecOneUserMol() {
  return (
    <>
      <MainRecOneUserMolStyle>
        <div>
          <Image
            src="/assets/images/dummyUserImg.jpg"
            alt="더미 유저 이미지"
            width={78}
            height={78}
          />
        </div>

        <div>
          <p>이 설명은 아주 길다랗지만 두줄로 나눠서 보일만큼 작아집니다.</p>
        </div>
      </MainRecOneUserMolStyle>
    </>
  );
}

export default MainRecOneUserMol;
