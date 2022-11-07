import styled from "@emotion/styled";
import Image from "next/image";
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

  .btn_dk {
    div {
      background-color: ${color.p_gray_md};
    }
  }
  
`;

const ReportStyle = styled.div`
  .report_img {
    text-align: center;
  }

  .report_p{
    color: ${color.p_gray_md};
    p{
      margin-top: 9px;
      margin-bottom: 9px;
    }
  }
  .close{
    div{
      background-color: ${color.p_gray_md};
    }
    margin-top: 18px;
    margin-bottom: 18px;
  }
`;

function ThreeDotMol(props: { postId: string | number }) {
  const token = useRecoilValue(TokenState).token;
  const { postId } = props;

  const [openModal, setOpenModal] = useState(false);
  const [reportMenu, setReportMenu] = useState(false);
  const [reportOk, setReportOk] = useState(false);

  useEffect(() => {
    setOpenModal(false);
  }, []);

  const handleOpenModal = () => {
    setReportMenu(false);
    setReportOk(false);
    setOpenModal(true);
  };

  const handlePostReport = async (reportType: string) => {
    if (await PostUtils.postReportData(token, postId, reportType)) {
      setReportMenu(false);
      setReportOk(true);
    }
  };
  return (
    <>
      <div onClick={() => handleOpenModal()}>
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
          {reportMenu === false && reportOk === false && (
            <>
              <div onClick={() => setReportMenu(true)}>
                <BtnTmp size="lg" value="신고하기" />
              </div>
              <div className="btn_dk">
                <BtnTmp size="lg" value="이 사용자 보지 않기" />
              </div>

              <div className="btn_dk" onClick={() => setOpenModal(false)}>
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

        {reportOk && (
          <ReportStyle>
            <div className="report_img">
              <div>
                <Image 
                  src="/assets/images/report_corn.jpg"
                  alt="신고하는 콘"
                  width={240}
                  height={240}
                />
              </div>
              <div className="report_p">
                <p>
                  신고 접수가 완료되었습니다.<p>
                    </p>신고 결과는 이후 알림으로
                  알려드릴게요 :{`)`}
                </p>
              </div>
            </div>

            <div className="btn_dk close" onClick={() => setOpenModal(false)}>
              <BtnTmp value="닫기" size="lg" />
            </div>
          </ReportStyle>
        )}
      </BottomSheet>
    </>
  );
}

export default ThreeDotMol;
