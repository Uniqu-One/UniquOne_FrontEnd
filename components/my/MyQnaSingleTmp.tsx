import styled from "@emotion/styled";
import { GetServerSideProps } from "next";
import React from "react";
import { useRecoilValue } from "recoil";
import { QnaUtils } from "../../lib/utils/QnaUtils";
import { TokenState } from "../../states/recoil/TokenState";
import LoadingSpinnerAtm from "../common/atm/LoadingSpinnerAtm";
import MyQnaSingleBoxMol from "./MyQnaSingleBoxMol";

const MyQnaSingleTmpStyle = styled.div`
  padding-top: 50px;
  padding-bottom: 60px;
`;

function MyQnaSingleTmp(props: { qnaId: string }) {
  
  const { qnaId } = props;
  const token = useRecoilValue(TokenState).token

  const qnaDetailData = QnaUtils.getMyDetailQna(token, qnaId)

  if(qnaDetailData === "isLoading"){
    <div>
      <LoadingSpinnerAtm/>
    </div>
  }

  console.log(qnaDetailData)

  return (
    <MyQnaSingleTmpStyle>
      <MyQnaSingleBoxMol />
      <MyQnaSingleBoxMol />
    </MyQnaSingleTmpStyle>
  );
}

export default MyQnaSingleTmp;
