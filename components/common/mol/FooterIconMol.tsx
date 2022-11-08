import React, { useEffect, useState } from "react";
import useEvaIcon from "../../../lib/hooks/useEvaIcon";
import { FooterIconAtm } from "../atm/FooterIconAtm";
import { color } from "../../../styles/theme";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Link from "next/link";

const FooterIconMolStyle = styled.div`
  i {
    fill: "5B5B5B";
    margin: auto 0;
  }

  .iconBox {
    
    a{
      margin: auto;
    }
    position: relative;

    .point {
      position: absolute;
      width: 6px;
      height: 6px;
      border-radius: 100%;
      background-color: ${color.p_pruple};
      bottom: 6px;
      right: 9px;
      
    }
  }

`;

function FooterIconMol() {
  useEvaIcon();
  const router = useRouter();

  return (
    <>
      <FooterIconMolStyle>
        <div className="iconBox">
          <Link href="/">
            <a>
              <i data-eva="home-outline" data-eva-fill={color.p_gray_dk}></i>
            </a>
          </Link>
          {router.pathname.split("/")[1] === "" && (
            <motion.div className="point" layoutId="underline"></motion.div>
          )}
          {router.pathname.split("/")[1] === "noti" && (
            <motion.div className="point" layoutId="underline"></motion.div>
          )}
        </div>

        <div className="iconBox">
          <Link href="/post">
            <a>
              <i data-eva="cube-outline" data-eva-fill={color.p_gray_dk}></i>
            </a>
          </Link>
          {router.pathname.split("/")[1] === "post" && (
            <motion.div className="point" layoutId="underline"></motion.div>
          )}
          {router.pathname.split("/")[1] === "profile" && (
            <motion.div className="point" layoutId="underline"></motion.div>
          )}
          {router.pathname.split("/")[1] === "search" && (
            <motion.div className="point" layoutId="underline"></motion.div>
          )}
        </div>

        <div className="iconBox">
          <Link href="/corn">
            <a className="cornIcon">
              <img  
                src="/assets/icons/uniquOneLogo.svg"
                alt="logo"
                width="24px"
                height="24px"
              />
            </a>
          </Link>
          {router.pathname.split("/")[1] === "corn" && (
            <motion.div className="point" layoutId="underline"></motion.div>
          )}
        </div>
        <div className="iconBox">
          <Link href="/chat">
            <a>
              <i data-eva="email-outline" data-eva-fill={color.p_gray_dk}></i>
            </a>
          </Link>
          {router.pathname.split("/")[1] === "chat" && (
            <motion.div className="point" layoutId="underline"></motion.div>
          )}
        </div>

        <div className="iconBox">
          <Link href="/my">
            <a>
              <i data-eva="person-outline" data-eva-fill={color.p_gray_dk}></i>
            </a>
          </Link>
          {router.pathname.split("/")[1] === "my" && (
            <motion.div className="point" layoutId="underline"></motion.div>
          )}
        </div>
      </FooterIconMolStyle>
    </>
  );
}

export default FooterIconMol;
