import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import LogoIconAtm from "../atm/LogoIconAtm";

function LogoIconMol() {
  const router = useRouter()
  return (
    <div onClick={()=>router.push('/')}>
      <LogoIconAtm />
    </div>
  );
}

export default LogoIconMol;
