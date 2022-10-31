import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { NotiUtils } from "../../../lib/utils/NotiUtils";
import { TokenState } from "../../../states/recoil/TokenState";
import { color } from "../../../styles/theme";
import { TopIconAtm } from "../atm/TopIconAtm";
import { TopLogoAtm } from "../atm/TopLogoAtm";
import { TopBoxMol } from "../mol/TopBoxMol";


const TopBoxMolStyle = styled.div`
  
  .count_check{
  background-color: ${color.p_red};
  height: 12px;
  width: 12px;
  position: absolute;
  right: 18px;
  top: -3px;
  border-radius: 100%;
  }

`

export const TopMainOrg = () => {
  const token = useRecoilValue(TokenState).token
  const router = useRouter();

  const [tempCnt, setTempCnt] = useState(0)

  const updateCount = async () => {
    const data = await NotiUtils.getNotiCount(token)
    setTempCnt(data.count)
  }

  useEffect(() => {
    if(token){
      updateCount()
    }
  },[])
  



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
          style={{"margin":"auto 0", "position":"relative"}}

          className="noti_icon"
          onClick={() => {
            console.log(1);
            router.push("/noti");
          }}
        >
          {tempCnt!==0 && <div className="count_check"></div>}
          <TopIconAtm>
            <i data-eva="bell-outline"></i>
          </TopIconAtm>
        </div>
      </TopBoxMol>
    </TopBoxMolStyle>
  );
};
