import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";

const FooterIcon = styled.i`
  width: 24px;
  height: 24px;
  fill: "5B5B5B";
  margin: auto 0;
`;

export const FooterIconAtm = (props: {
  url: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <FooterIcon>
        <Link href={`${props.url}`}>
          <a>{props.children}</a>
        </Link>
      </FooterIcon>
    </>
  );
};
