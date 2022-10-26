import styled from "@emotion/styled";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { QnaUtils } from "../../lib/utils/QnaUtils";
import { TokenState } from "../../states/recoil/TokenState";
import { color } from "../../styles/theme";
import TopTmp from "../common/tmp/TopTmp";
import { qnaDataType } from "./MyQnaMainTmp";

const MyQnaEnrollModalStyle = styled.div`

  z-index: 4;
  width: 100vw;
  position: fixed;
  top: 0;
  background-color: white;

  textarea {
    resize: none;
    height: 100px;
    width: calc(100% - 36px);
    border: 0px;
    margin: 0 18px;
    border-bottom: 0.5px solid ${color.p_gray_md};
  }

  label {
    accent-color: ${color.p_pruple};
    margin: 3px 18px;
    border-bottom: 1px solid ${color.p_gray_lt};

    display: flex;
    p {
      padding: 15px 0px;
      margin-left: 9px;
      display: flex;
      flex-direction: column;
      font-weight: 650;
    }
    span {
      margin-top: 6px;
      font-size: 0.8rem;
      color: ${color.p_gray_md};
      font-weight: 400;
    }
  }
`;

function MyQnaEnrollModal(props: {
  setQnaEnrollModal: Function;
  qnaData: qnaDataType;
  setQnaData: Function;
}) {
  const QNA_MENU = ["POST", "COMMENT", "TRADE", "SERVICE"];
  
  const token = useRecoilValue(TokenState).token

  const [tempRadio, setTempRadio] = useState("");
  const [tempTextAreaCount, setTempAreaCount] = useState(300);

  const { qnaData, setQnaData } = props;

  const handleChangeTempRadio = (menu: string) => {
    setQnaData((prev: qnaDataType) => {
      return { ...prev, type: menu };
    });

    setTempRadio(menu);
  };

  const handleOnChangeDescData = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (tempTextAreaCount < 1) {
      return null;
    } else {
      setQnaData((prev: qnaDataType) => {
        return { ...prev, desc: e.target.value };
      });
      setTempAreaCount(300 - e.target.value.length);
    }
  };

  const handlePostQna = async () => {
    if(await QnaUtils.postMyQna(token,qnaData)){
      props.setQnaEnrollModal(false)
    } else {
      props.setQnaEnrollModal(true)
    }
  }

  return (
    <>
      <MyQnaEnrollModalStyle>
        <TopTmp
          type="qna"
          text="문의 작성하기"
          function={props.setQnaEnrollModal}
          function_right={handlePostQna}
        />

        <div style={{"paddingTop":"50px"}}>
          <h3>문의 유형을 선택해주세요</h3>
        </div>

        {QNA_MENU.map((menu, idx) => {
          return (
            <label
              key={idx}
              htmlFor={menu}
              onClick={() => handleChangeTempRadio(menu)}
            >
              <input
                type="radio"
                name={menu}
                value={menu}
                checked={tempRadio === menu}
                readOnly
              />
              <p>{menu}</p>
            </label>
          );
        })}

        <div>
          <h3>문의 상세 내용을 작성해주세요</h3>
          <textarea
            placeholder="여기에 내용을 적어주세요."
            value={qnaData.desc}
            onChange={(e) => handleOnChangeDescData(e)}
          ></textarea>
          <p>{tempTextAreaCount}</p>
        </div>
      </MyQnaEnrollModalStyle>
    </>
  );
}

export default MyQnaEnrollModal;
