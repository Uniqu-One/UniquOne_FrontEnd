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

function MyQnaSingleBoxMol() {
  return (
    <>
      <MyQnaSingleBoxMolStyle>
        <div>
          <div className="img_circle">
            <UserImgAtm width={48} height={48} />
          </div>
          <div className="text_area">
            <h4>해설은 이렇게 계속해서 들어감. 우리는 운명같아요해설은 이렇게 계속해서 들어감. 우리는 운명같아요해설은 이렇게 계속해서 들어감. 우리는 운명같아요해설은 이렇게 계속해서 들어감. 우리는 운명같아요</h4>
            <p>2022년 9월 21일 10:36</p>
          </div>
        </div>
      </MyQnaSingleBoxMolStyle>
    </>
  );
}

export default MyQnaSingleBoxMol;
