import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { NotiUtils } from "../../../lib/utils/NotiUtils";
import { TokenState } from "../../../states/recoil/TokenState";
import { color } from "../../../styles/theme";
import { TopIconAtm } from "../atm/TopIconAtm";
import { TopLogoAtm } from "../atm/TopLogoAtm";
import { TopBoxMol } from "../mol/TopBoxMol";
import lottie from "lottie-web";
import MoveBellIcon from "../icon/MoveBellIcon";
import BellIcon from "../icon/BellIcon";

const TopBoxMolStyle = styled.div`
  .count_check {
    background-color: ${color.p_red};
    height: 12px;
    width: 12px;
    position: absolute;
    right: 18px;
    top: -3px;
    border-radius: 100%;
  }
`;

export const TopMainOrg = () => {
  const token = useRecoilValue(TokenState).token;
  const router = useRouter();

  const [tempCnt, setTempCnt] = useState(0);

  const updateCount = async () => {
    const data = await NotiUtils.getNotiCount(token);
    setTempCnt(data.count);
  };

  useEffect(() => {
    if (token) {
      updateCount();
    }
  }, []);

  const bellCon = useRef(null);
  const moveBellCon = useRef(null);

  useEffect(() => {
    if (bellCon.current)
      lottie.loadAnimation({
        container: bellCon.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData: require("../../../public/assets/images/animation/bellMove.json"),
      });

    if (moveBellCon.current)
      lottie.loadAnimation({
        container: moveBellCon.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../../../public/assets/images/animation/bellMove.json"),
      });
  }, []);

  return (
    <TopBoxMolStyle>
      <TopBoxMol>
        <Link href="/">
          <a>
            <TopLogoAtm>
              <Image
                src="/assets/icons/uniquOneLogoGradient.svg"
                alt="logo"
                width={30}
                height={30}
              />
              <h1>UNIQUONE</h1>
            </TopLogoAtm>
          </a>
        </Link>

        <div
          style={{ margin: "auto 0", position: "relative" }}
          className="noti_icon"
          onClick={() => {
            console.log(1);
            router.push("/noti");
          }}
        >
          {tempCnt !== 0 && <div className="count_check"></div>}
          {tempCnt === 0 ? (
            <BellIcon/>
          ) : (
            <MoveBellIcon/>
          )}
        </div>
      </TopBoxMol>
    </TopBoxMolStyle>
  );
};
