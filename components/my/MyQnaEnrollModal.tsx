import styled from "@emotion/styled";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { QnaUtils } from "../../lib/utils/QnaUtils";

import { TokenState } from "../../states/recoil/TokenState";
import { color } from "../../styles/theme";
import TopTmp from "../common/tmp/TopTmp";
import { qnaDataType } from "./MyQnaMainTmp";

import {QNA_MENU_LIST} from '../../public/assets/datas/qnaMenuList'
import { ToastUtils } from "../common/tmp/ToastTmp";

const MyQnaEnrollModalStyle = styled.div`
  z-index: 7;
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
  .text_count{
    display: flex;
    justify-content: right;
    margin-top: 3px;
    margin-right: 18px;
    font-size: 0.875rem;
    color: ${color.p_gray_md};
  }
`;

function MyQnaEnrollModal(props: {
  setQnaEnrollModal: Function;
  qnaData: qnaDataType;
  setQnaData: Function;
}) {

  const token = useRecoilValue(TokenState).token;

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
    if (await QnaUtils.postMyQna(token, qnaData)) {
      ToastUtils.success('문의 등록이 완료되었습니다.')
      props.setQnaEnrollModal(false);
    } else {
      props.setQnaEnrollModal(true);
    }
  };

  return (
    <>
      <MyQnaEnrollModalStyle>
        <TopTmp
          type="qna"
          text="문의 작성하기"
          function={props.setQnaEnrollModal}
          function_right={handlePostQna}
        />

        <div style={{ paddingTop: "50px" }}>
          <h3>문의 유형을 선택해주세요</h3>
        </div>

        {QNA_MENU_LIST.map((menu, idx) => {
          return (
            <label
              key={idx}
              htmlFor={menu[1]}
              onClick={() => handleChangeTempRadio(menu[1])}
            >
              <input
                type="radio"
                name={menu[1]}
                value={menu}
                checked={tempRadio === menu[1]}
                readOnly
              />
              <p>{menu[0]}</p>
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
          <p className="text_count">{tempTextAreaCount}</p>
        </div>
      </MyQnaEnrollModalStyle>
    </>
  );
}

export default MyQnaEnrollModal;
