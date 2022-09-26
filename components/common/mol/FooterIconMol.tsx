import Image from "next/image";
import React, { useEffect } from "react";
import useEvaIcon from "../../../hooks/useEvaIcon";
import { FooterIconAtm } from "../atm/FooterIconAtm";

function FooterIconMol() {
  useEvaIcon();

  return (
    <>
      <FooterIconAtm>
        <i data-eva="home-outline"></i>
      </FooterIconAtm>
      <FooterIconAtm>
        <i data-eva="cube-outline"></i>
      </FooterIconAtm>
      <FooterIconAtm>
        <Image src="/assets/icons/uniquOneLogo.svg" alt="logo" width={24} height={24}/>
      </FooterIconAtm>
      <FooterIconAtm>
        <i data-eva="email-outline"></i>
      </FooterIconAtm>
      <FooterIconAtm>
        <i data-eva="person-outline"></i>
      </FooterIconAtm>
    </>
  );
}

export default FooterIconMol;
