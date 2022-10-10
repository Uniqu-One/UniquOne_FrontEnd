import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import useEvaIcon from "../../lib/hooks/useEvaIcon";
import { color } from "../../styles/theme";

const MyQnaMainBoxMolStyle = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${color.p_gray_dk};
  margin: 0 18px;
  border-bottom: 0.5px solid ${color.p_gray_md};

  .left_box {
    padding-left: 12px;
    .title {
      font-weight: 500;
      font-size: 0.875rem;
      margin-top: 12px;
      margin-bottom: 6px;
    }
    .date {
      font-size: 0.8rem;
      margin-bottom: 12px;
      color: ${color.p_gray_md};

      span {
        color: ${color.p_gray_md};
      }

      .answer {
        font-weight: 500;
        color: ${color.p_pruple};
      }
    }
  }

  .icon {
    margin: auto 0;
    svg {
      fill: ${color.p_gray_dk};
      width: 30px;
      height: 30px;
    }
  }
`;

function MyQnaMainBoxMol() {
  // TODO - 상담완료 내역

  let answer;

  useEvaIcon();
  return (
    <>
      <Link href="/my/qna/1">
        <a>
          <MyQnaMainBoxMolStyle>
            <div className="left_box">
              <div className="title">
                <h2>[문의 카테고리 이름] 문의 내용 N자 까지</h2>
              </div>
              <div className="date">
                <p>
                  2022년 9월 21일 10:36 ·{" "}
                  <span className={answer && answer}>
                    {answer ? "상담완료" : "상담대기"}
                  </span>
                </p>
              </div>
            </div>
            <div className="icon">
              <i data-eva="arrow-ios-forward-outline"></i>
            </div>
          </MyQnaMainBoxMolStyle>
        </a>
      </Link>
    </>
  );
}

export default MyQnaMainBoxMol;
