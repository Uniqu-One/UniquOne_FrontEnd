import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";


export const FooterIconAtm = (props: {
  url: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      {/* <FooterIcon> */}
        <Link href={`${props.url}`}>
          <a>{props.children}</a>
        </Link>
      {/* </FooterIcon> */}
    </>
  );
};
