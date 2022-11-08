import styled from "@emotion/styled";
import React from "react";
import { color } from "../../styles/theme";
import UserImgAtm from "../common/atm/UserImgAtm";

const MyQnaSingleBoxMolStyle = styled.div`
  > div {
    display: flex;
    margin: 12px 18px;
    .img_circle {
      margin-right: 18px;
    }
  }

  .text_area {
    width: calc(100% - 66px);
    h4 {
      color: ${color.p_gray_dk};
      font-size: 0.875rem;
    }
    p {
      margin-top: 9px;
      color: ${color.p_gray_md};
      font-size: 0.8rem;
    }
  }
`;

function MyQnaSingleBoxMol(props: { qnaDetailData: {}; type: string }) {
  const {
    //@ts-ignore
    adminImg,answer,aregDate,cornImg,isAnswer,qnaId,qregDate,question,questionType,
  } = props.qnaDetailData;

  if (props.type === "question") {
    return (
      <>
        <MyQnaSingleBoxMolStyle>
          <div>
            <div className="img_circle">
              <UserImgAtm width={48} height={48} url={cornImg}/>
            </div>
            <div className="text_area">
              <h4>
                {question}
              </h4>
              <p>{qregDate}</p>
            </div>
          </div>
        </MyQnaSingleBoxMolStyle>
      </>
    );
  }

  if (props.type === "answer") {
    return (
      <>
        <MyQnaSingleBoxMolStyle>
          <div>
            <div className="img_circle">
              <UserImgAtm width={48} height={48} url={adminImg}/>
            </div>
            <div className="text_area">
              <h4>
                {answer}
              </h4>
              <p>{aregDate}</p>
            </div>
          </div>
        </MyQnaSingleBoxMolStyle>
      </>
    );
  }


  return <></>;
}

export default MyQnaSingleBoxMol;
