import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import useEvaIcon from "../../lib/hooks/useEvaIcon";
import { color } from "../../styles/theme";
import { qnaListType } from "../../types/qna/qnaListType";

import { QNA_MENU_LIST,QNA_KEY_VAL_LIST } from "../../public/assets/datas/qnaMenuList";

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

function MyQnaMainBoxMol(props: { qna: qnaListType }) {
  const { isAnswer, qnaId, qregDate, question, questionType } = props.qna;

  useEvaIcon();

  return (
    <>
      <Link href="/my/qna/1">
        <a>
          <MyQnaMainBoxMolStyle>
            <div className="left_box">
              <div className="title">
                {/* @ts-ignore */}
                <h2>[{QNA_KEY_VAL_LIST[questionType]}] {question.slice(0,15)}...</h2>
              </div>
              <div className="date">
                <p>
                  {qregDate} ·{" "}
                  <span >
                    {isAnswer ? "상담완료" : "상담대기"}
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
