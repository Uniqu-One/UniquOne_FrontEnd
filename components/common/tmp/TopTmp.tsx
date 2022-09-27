import React from "react";
import { TopMainOrg } from "../org/TopMainOrg";
import { TopOptionalOrg } from "../org/TopOptionalOrg";
import TopPostOrg from "../org/TopPostOrg";

function TopTmp(props: {
  type: string;
  left?: string;
  text?: string;
  right?: string;
}) {
  

  switch (props.type) {
    case "main":
      return <TopMainOrg />;

    case "arrowText":
      return <TopOptionalOrg left="back" text={props.text} />;

    case "post":
      return <TopPostOrg/>

    // case "style":
    //   return <TopOptionalOrg left="cancel" text="스타일 등록"/>

    default:
      return <TopOptionalOrg left="back" text="DEFAULT" />;
  }
}

export default TopTmp;
