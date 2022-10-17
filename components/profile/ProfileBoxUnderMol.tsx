import Link from "next/link";
import React from "react";



function ProfileBoxUnderMol(props: { desc: string; link: string }) {
  const { desc, link } = props;

  return (
    <>
      <div>
        <p>{desc}</p>
      </div>

      <div>
        <Link href={`http://${link}`}>
          <a>
            <span>{link}</span>
          </a>
        </Link>
      </div>
    </>
  );
}

export default ProfileBoxUnderMol;
