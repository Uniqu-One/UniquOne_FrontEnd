import Link from "next/link";
import React from "react";
import { color } from "../../styles/theme";



function ProfileBoxUnderMol(props: { desc: string; link: string }) {
  const { desc, link } = props;

  return (
    <>
      <div>
        <p>{desc}</p>
      </div>

      <div>
        <Link href={`http://${link}`}>
          <a style={{color:`${color.p_pruple}`}}>
            <span>{link}</span>
          </a>
        </Link>
      </div>
      
    </>
  );
}

export default ProfileBoxUnderMol;
