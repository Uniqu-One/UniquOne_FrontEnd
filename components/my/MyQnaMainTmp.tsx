import styled from "@emotion/styled";
import { type } from "os";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { QnaUtils } from "../../lib/utils/QnaUtils";
import { TokenState } from "../../states/recoil/TokenState";
import { color } from "../../styles/theme";
import { qnaListType } from "../../types/qna/qnaListType";
import QuestionMarkAtm from "../common/atm/QuestionMarkAtm";
import BtnTmp from "../common/tmp/BtnTmp";
import MyQnaEnrollModal from "./MyQnaEnrollModal";
import MyQnaMainBoxMol from "./MyQnaMainBoxMol";

export type qnaDataType = {
  type: string;
  desc: string;
};

const MyQnaMainTmpStyle = styled.div`
  padding-top: 50px;
  h3 {
    margin: 18px 18px 12px;
    color: ${color.p_gray_dk};
    font-weight: 550;
  }
  .no-data {
    margin-top: 24vh;
    text-align: center;
    svg {
      fill: ${color.p_gray_md};
      width: 48px;
      height: 48px;
    }
    p {
      margin-top: 9px;
      color: ${color.p_gray_md};
      font-size: 0.875rem;
    }
  }
`;

function MyQnaMainTmp() {
  const token = useRecoilValue(TokenState).token;

  const [qnaData, setQnaData] = useState({
    type: "",
    desc: "",
  });

  const [qnaEnrollModal, setQnaEnrollModal] = useState(false);
  const myQnaDatas:qnaListType[] = QnaUtils.getMyQna(token);

  return (
    <>
      <MyQnaMainTmpStyle>
        {qnaEnrollModal ? (
          <>
            <MyQnaEnrollModal
              setQnaEnrollModal={setQnaEnrollModal}
              qnaData={qnaData}
              setQnaData={setQnaData}
            />
          </>
        ) : (
          <>
            <div>
              <h3>문의하기</h3>
            </div>
            <div onClick={() => setQnaEnrollModal(true)}>
              <BtnTmp size="lg" value="문의 작성하기" status={true} />
            </div>

            <div>
              <div>
                <h3>문의 내역</h3>
              </div>

              {myQnaDatas ? (
                myQnaDatas.map((qna) => {
                  return <MyQnaMainBoxMol key={qna.qnaId} qna={qna}/>;
                })
              ) : (
                <div className="no-data">
                  <QuestionMarkAtm />
                  <p>QnA 내역이 없습니다.</p>
                </div>
              )}
            </div>
          </>
        )}
      </MyQnaMainTmpStyle>
    </>
  );
}

export default MyQnaMainTmp;
