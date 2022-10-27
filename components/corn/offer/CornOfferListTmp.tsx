import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { OfferUtils } from "../../../lib/utils/OfferUtils";
import { TokenState } from "../../../states/recoil/TokenState";
import CornOfferListBoxMol from "./CornOfferListBoxMol";

const CornOfferListStyle = styled.div`
  padding-top: 50px;
`;

function CornOfferList() {
  const token = useRecoilValue(TokenState).token;

  // const [tempList, setTempList] = useState([]);

  // const test = async () => {
  //   const data = await OfferUtils.getMyCornOfferList(token);
  //   setTempList(data);
  // };

  // useEffect(() => {
  //   test();
  // }, []);

  const tempList = ["1","2","3"]

  {/* @ts-ignore */}
  if (tempList==="Loading") {
    return <div>로딩중</div>;
  }

  if (!tempList) {
    return <div>나에게 온 오퍼가 없습니다.</div>;
  }

  return (
    <>
      <CornOfferListStyle>
        {/* @ts-ignore */}
        {tempList.map((offer, idx) => {
          return (
            <Link href={`/corn/offer/${offer}`}>
              <a>
                <CornOfferListBoxMol key={offer} />
              </a>
            </Link>
          );
        })}
      </CornOfferListStyle>
    </>
  );
}

export default CornOfferList;
