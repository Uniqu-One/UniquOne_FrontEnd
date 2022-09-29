
import { useRouter } from "next/router";
import React from "react";
import LogoIconAtm from "../atm/LogoIconAtm";

function LogoIconMol() {
  const router = useRouter()
  return (
    <div onClick={()=>router.push('/')}>
      <LogoIconAtm width={160} height={160}/>
    </div>
  );
}

export default LogoIconMol;
