import styled from "@emotion/styled";
import { type } from "os";
import React, { useState } from "react";
import { color } from "../../styles/theme";
import BtnTmp from "../common/tmp/BtnTmp";
import MyQnaEnrollModal from "./MyQnaEnrollModal";
import MyQnaMainBoxMol from "./MyQnaMainBoxMol";


export type qnaDataType = {
  type:string,
  desc:string
}

const MyQnaMainTmpStyle = styled.div`
  h3 {
    margin: 18px 18px 12px;
    color: ${color.p_gray_dk};
  }
`;

function MyQnaMainTmp() {
  const [qnaData, setQnaData] = useState({
    type: "",
    desc: "",
  });

  const [qnaEnrollModal, setQnaEnrollModal] = useState(false);

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

              <MyQnaMainBoxMol />
            </div>
          </>
        )}
      </MyQnaMainTmpStyle>
    </>
  );
}

export default MyQnaMainTmp;
