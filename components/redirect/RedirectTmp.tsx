import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Confetti from "react-confetti";

import { color } from "../../styles/theme";
import BtnTmp from "../common/tmp/BtnTmp";

const RedirectTmpStyle = styled.div`
  margin-top: 124px;
  text-align: center;
  > div {
    :first-of-type {
      /* background-color: red; */
      font-size: 0.875rem;
      color: ${color.p_gray_dk};
      line-height: 1.1rem;
    }
  }
  > p {
    :last-of-type {
      /* background-color: red; */
      margin-top: 9px;
      color: ${color.p_gray_md};
      text-decoration: underline;
      font-size: 0.875rem;
    }
  }
`;

function RedirectTmp(props: { type?: string }) {
  return (
    <>
      <Confetti
        width={390}
        height={2000}
        opacity={0.5}
        // recycle={false}
        gravity={0.1}
        numberOfPieces={100}
      />

      {props.type === "style" && (
        <RedirectTmpStyle>
          <div>
            <p>스타일 설정이 완료되었습니다! 🎉</p>
            <br />
            <p>지금부터 유니크원에 다양한 스타일을 즐겨보세요!</p>
          </div>
          <Image
            src="/assets/images/congImage.png"
            alt="축하 이미지"
            width={270}
            height={270}
          />
          <Link href="/">
            <a>
              <BtnTmp size="default" value="홈으로 이동하기" />
            </a>
          </Link>
        </RedirectTmpStyle>
      )}

      {props.type === "corn" && (
        <RedirectTmpStyle>
          <div>
            <p>콘 개설이 완료되었습니다! 🎉</p>
            <br />
            <p>지금부터 내 다양한 포스트를 통해</p>
            <p>다른 유저들에게 내 스타일을 소개해주세요!</p>
          </div>
          <Image
            src="/assets/images/congImage.png"
            alt="축하 이미지"
            width={270}
            height={270}
          />

          <BtnTmp size="default" value="나의 Corn으로 이동" />
          <Link href="/">
            <p>홈으로 가기</p>
          </Link>
        </RedirectTmpStyle>
      )}
    </>
  );
}

export default RedirectTmp;
