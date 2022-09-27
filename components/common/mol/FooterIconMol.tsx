import Image from "next/image";
import React, { useEffect } from "react";
import useEvaIcon from "../../../hooks/useEvaIcon";
import { FooterIconAtm } from "../atm/FooterIconAtm";
import { color } from "../../../styles/theme";

function FooterIconMol() {
  useEvaIcon();

  return (
    <>
      <FooterIconAtm url="/">
        <i data-eva="home-outline" data-eva-fill={color.p_gray_dk}></i>
      </FooterIconAtm>
      <FooterIconAtm url="/post">
        <i data-eva="cube-outline" data-eva-fill={color.p_gray_dk}></i>
      </FooterIconAtm>
      <FooterIconAtm url="/corn">
        <Image
          src="/assets/icons/uniquOneLogo.svg"
          alt="logo"
          width={24}
          height={24}
        />
      </FooterIconAtm>
      <FooterIconAtm url="/chat">
        <i data-eva="email-outline" data-eva-fill={color.p_gray_dk}></i>
      </FooterIconAtm>
      <FooterIconAtm url="/my">
        <i data-eva="person-outline" data-eva-fill={color.p_gray_dk}></i>
      </FooterIconAtm>
    </>
  );
}

export default FooterIconMol;
