import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import CornPostTmp from "../../corn/post/CornPostTmp";
import { TopIconAtm } from "../atm/TopIconAtm";
import { TopLogoAtm } from "../atm/TopLogoAtm";
import { TopBoxMol } from "../mol/TopBoxMol";

export const TopMainOrg = () => {

  return (
    <>
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
        <TopIconAtm>
          <i data-eva="bell-outline"></i>
        </TopIconAtm>
      </TopBoxMol>
    </>
  );
};
