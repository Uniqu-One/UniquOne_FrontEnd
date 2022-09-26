import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import useEvaIcon from "../../../hooks/useEvaIcon";

const TopBox = styled.div`
  width: 100vw;
  height: 48px;
  border-bottom: 0.5px solid gray;
  display: flex;
  justify-content: space-between;
`;

const TopIcon = styled.i`
  margin: auto 18px;
  width: 24px;
  height: 24px;
  /* background-color: blue; */
`;

const TopTitle = styled.div`
  line-height: 48px;
  /* background-color: red; */
  font-size: 1rem;
`;

const TopLogo = styled.div`
  margin-left: 12px;
  font-weight: 800;
  letter-spacing: -0.05rem;
  display: flex;

  /* img{
    color: red;
  } */

  h1 {
    line-height: 50px;
    background: linear-gradient(
      113.7deg,
      #e2b0f3 -14.74%,
      #e277de 44.02%,
      #79bbf9 98.08%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Main = () => {
  return (
    <TopBox>
      <Link href="/">
        <TopLogo>
          <Image
            src="/assets/icons/uniquOneLogo.svg"
            alt="logo"
            width="33"
            height="33"
          />
          <a>
            <h1>UNIQUONE</h1>
          </a>
        </TopLogo>
      </Link>
      <TopIcon>
        <i data-eva="bell-outline"></i>
      </TopIcon>
    </TopBox>
  );
};

const IconTextIcon = (props:{left:string, text:string, right?:string}) => {
  const router = useRouter();
  return (
    <TopBox>
      <TopIcon onClick={() => router.back()}>
        {props.left === "back" ? <i data-eva="arrow-ios-back"></i> : <></>}
      </TopIcon>
      <TopTitle>
        <p>{props.text}</p>
      </TopTitle>
      <TopIcon>
        <i data-eva="checkmark"></i>
      </TopIcon>
    </TopBox>
  );
};

let type = "login";

function TopTmp() {
  useEvaIcon();

  switch (type) {
    case "main":
      return <Main />;

    case "login":
      return <IconTextIcon left="back" text="로그인"/>;

    default:
      return <IconTextIcon left="back" text="DEFAULT"/>;
  }
}

export default TopTmp;
