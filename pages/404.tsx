import styled from "@emotion/styled";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import BtnTmp from "../components/common/tmp/BtnTmp";
import { color } from "../styles/theme";

const ErrorPageIntervalStyle = styled.div`
  > div {
    text-align: center;

    :nth-of-type(1) {
      margin-top: 108px;
    }
    :nth-of-type(2) {
      p {
        color: ${color.p_gray_dk};
        font-size: 0.875rem;
      }
      margin-top: 24px;
      margin-bottom: 36px;
    }
  }
`;

function Error() {
  const router = useRouter();

  return (
    <>
      <ErrorPageIntervalStyle>
        <div>
          <img  
            src="/assets/images/404.png"
            alt="잘못된 페이지"
            width={240}
            height={240}
          />
        </div>

        <div>
          <p>올바르지 않은 경로로 접근하셨습니다.</p>
        </div>
        <div onClick={() => router.back()}>
          <BtnTmp size="lg" value="이전 페이지로 돌아가기" status={true} />
        </div>
      </ErrorPageIntervalStyle>
    </>
  );
}

export default Error;
