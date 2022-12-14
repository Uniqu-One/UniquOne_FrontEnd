import styled from "@emotion/styled";
import Link from "next/link";
import React, { useEffect } from "react";
import Confetti from "react-confetti";
import { ToastUtils } from "../common/tmp/ToastTmp";
import { color } from "../../styles/theme";
import BtnTmp from "../common/tmp/BtnTmp";

const RedirectTmpStyle = styled.div`
  margin-top: 124px;
  text-align: center;
  > div {
    :first-of-type {
      font-size: 0.875rem;
      color: ${color.p_gray_dk};
      line-height: 1.1rem;
    }
  }
  > p {
    :last-of-type {
      margin-top: 9px;
      color: ${color.p_gray_md};
      text-decoration: underline;
      font-size: 0.875rem;
    }
  }
`;

function RedirectTmp(props: { type: string }) {
  const type = props.type;

  useEffect(() => {
    if (type === "corn") {
      ToastUtils.toast("콘 개설이 완료되었습니다!");
    } else {
      ToastUtils.toast("회원가입이 완료되었습니다!");
    }
  }, []);

  const handleChangePage = () => {
    window.location.replace("/corn");
  };

  return (
    <>
      <Confetti
        width={390}
        height={600}
        opacity={0.5}
        gravity={0.1}
        numberOfPieces={100}
      />

      {type === "corn" && (
        <RedirectTmpStyle>
          <div>
            <p>콘 개설이 완료되었습니다! 🎉</p>
            <br />
            <p>지금부터 내 다양한 포스트를 통해</p>
            <p>다른 유저들에게 내 스타일을 소개해주세요!</p>
          </div>
          <img
            src="/assets/images/congImage.png"
            alt="축하 이미지"
            width="270px"
            height="270px"
          />
          <div onClick={() => handleChangePage()}>
            <BtnTmp size="default" value="나의 Corn으로 이동" />
          </div>
          <Link href="/">
            <p>홈으로 가기</p>
          </Link>
        </RedirectTmpStyle>
      )}

      {type === "signup" && (
        <RedirectTmpStyle>
          <div>
            <p>회원가입을 해주셔서 감사합니다 🎉</p>
            <br />
            <p>지금부터 유니콘의 서비스를 즐겨보세요!</p>
            {/* <p>스타일에 맞는 포스트들을 추천해드릴게요!</p> */}
          </div>
          <img
            src="/assets/images/congImage.png"
            alt="축하 이미지"
            width="270px"
            height="270px"
          />
          <Link href="/">
            <a>
              <BtnTmp size="default" value="홈페이지로 이동" />
            </a>
          </Link>
          {/* <Link href="/">
            <p>나중에 설정하기</p>
          </Link> */}
        </RedirectTmpStyle>
      )}
    </>
  );
}

export default RedirectTmp;
