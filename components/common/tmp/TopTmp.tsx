import React from "react";
import { TopMainOrg } from "../org/TopMainOrg";
import { TopOptionalOrg } from "../org/TopOptionalOrg";
import TopPostOrg from "../org/TopPostOrg";

function TopTmp(props: {
  type?: string;
  left?: string;
  text?: string;
  right?: string;
  function?: Function;
  status?: boolean;
  function_right?: Function;
}) {
  switch (props.type) {
    case "main":
      return <TopMainOrg />;

    case "arrowText":
      return <TopOptionalOrg left="back" text={props.text} />;

    case "comment":
      return (
        <TopOptionalOrg left="back" text={"댓글"} right={"email-outline"} />
      );

    case "my":
      return (
        <TopOptionalOrg
          left="star-outline"
          text={"마이 페이지"}
          right={"settings-outline"}
        />
      );

    case "chat":
      return (
        <TopOptionalOrg left="nt" text={props.text} right={"bell-outline"} />
      );

    case "postOffer":
      return (
        <TopOptionalOrg
          left="close-outline"
          text={"가격제안"}
          function={props.function}
        />
      );

    case "cornEdit":
      return (
        <TopOptionalOrg
          left="back"
          text={props.text}
          right={"checkmark-outline"}
        />
      );

    case "edit":
      return (
        <TopOptionalOrg
          left="back"
          text={props.text}
          right={"checkmark-outline"}
          status={props.status}
        />
      );

    case "post":
      return <TopPostOrg />;

    case "qna":
      return (
        <TopOptionalOrg
          left="close-outline"
          text={props.text}
          right={"checkmark-outline"}
          function={props.function}
          function_right={props.function_right}
        />
      );

    default:
      return (
        <TopOptionalOrg
          left="back"
          text={props.text}
          function={props.function}
        />
      );
  }
}

export default TopTmp;
