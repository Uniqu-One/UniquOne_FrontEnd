import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";
import { BottomSheet, BottomSheetRef } from "react-spring-bottom-sheet";
import { useRecoilValue } from "recoil";
import { PostUtils } from "../../../lib/utils/PostUtils";
import { TokenState } from "../../../states/recoil/TokenState";
import { color } from "../../../styles/theme";
import BottomSheetRadioMol from "../../bottom_sheet/BottomSheetRadioMol";
import ThreeDotAtm from "../atm/ThreeDotAtm";
import BtnTmp from "../tmp/BtnTmp";

const ThreeDotMolStyle = styled.div`
  > div {
    div {
      margin-top: 9px;
      margin-bottom: 9px;
    }

    :first-of-type {
      div {
        background-color: ${color.p_red};
        color: white;
      }
    }

    :last-of-type {
      margin-top: 18px;
      margin-bottom: 18px;
    }
  }
`;

function ThreeDotMol(props: { postId: string | number }) {

  const token = useRecoilValue(TokenState).token
  const {postId} = props

  const [openModal, setOpenModal] = useState(false);
  const [reportMenu, setReportMenu] = useState(false);

  useEffect(() => {
    setOpenModal(false);
  }, []);

  const handlePostReport = (reportType:string) => {
    PostUtils.postReportData(token, postId,reportType)
    console.log('신고 진행')

  };
  return (
    <>
      <div onClick={() => setOpenModal(true)}>
        <ThreeDotAtm />
      </div>
      <BottomSheet
        open={openModal}
        onDismiss={() => {
          setOpenModal(false);
          setReportMenu(false);
        }}
      >
        <ThreeDotMolStyle>
          {reportMenu === false && (
            <>
              <div onClick={() => setReportMenu(true)}>
                <BtnTmp size="lg" value="신고하기" />
              </div>
              <div>
                <BtnTmp size="lg" value="이 사용자 보지 않기" />
              </div>

              <div onClick={() => setOpenModal(false)}>
                <BtnTmp size="lg" value="취소" />
              </div>
            </>
          )}
        </ThreeDotMolStyle>

        {reportMenu && (
          <BottomSheetRadioMol
            tempMenu="report"
            setOpen={setOpenModal}
            functionPlus={handlePostReport}
          />
        )}


      </BottomSheet>
    </>
  );
}

export default ThreeDotMol;
