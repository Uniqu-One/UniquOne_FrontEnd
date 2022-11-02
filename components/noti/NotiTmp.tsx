import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { NotiUtils } from "../../lib/utils/NotiUtils";
import { TokenState } from "../../states/recoil/TokenState";
import { color } from "../../styles/theme";
import QuestionMarkAtm from "../common/atm/QuestionMarkAtm";
import NotiBoxMol from "./NotiBoxMol";

const NotiTmpStyle = styled.div`
  padding-top: 48px;
  padding-bottom: 60px;

  .no-data{
    text-align: center;
    margin-top: 30vh;
    svg{
      fill: ${color.p_gray_md};
      width: 48px;
      height: 48px;
    }
    p{
      margin-top: 9px;
      font-size: 0.875rem;
      color: ${color.p_gray_md};
    }
  }
`;

function NotiTmp() {
  const token = useRecoilValue(TokenState).token;
  const [notiData, setNotiData] = useState([]);

  const updateNotiData = async () => {
    setNotiData(await NotiUtils.getNotiDatas(token, 1));
  };

  useEffect(() => {
    updateNotiData();
  }, []);

  if (!notiData) {
    return <NotiTmpStyle>
      <div className="no-data">
      <QuestionMarkAtm/>
      <p>알림 내역이 없습니다.</p>
      </div>
      </NotiTmpStyle>;
  }

  return (
    <NotiTmpStyle>
      {notiData !== undefined ? (
        notiData.map((noti, idx) => {
          return <NotiBoxMol key={idx} noti={noti} />;
        })
      ) : (
        <div></div>
      )}
    </NotiTmpStyle>
  );
}

export default NotiTmp;
