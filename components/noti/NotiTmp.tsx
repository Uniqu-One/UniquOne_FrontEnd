import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { NotiUtils } from "../../lib/utils/NotiUtils";
import { TokenState } from "../../states/recoil/TokenState";
import NotiBoxMol from "./NotiBoxMol";

const NotiTmpStyle = styled.div`
  padding-top: 50px;
  padding-bottom: 60px;
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
