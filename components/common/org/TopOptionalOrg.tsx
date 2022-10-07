import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import useEvaIcon from "../../../lib/hooks/useEvaIcon";
import { TopIconAtm } from "../atm/TopIconAtm";
import { TopTitleAtm } from "../atm/TopTitleAtm";
import { TopBoxMol } from "../mol/TopBoxMol";

export const TopOptionalOrg = (props: {
  left: string;
  text?: string;
  right?: string;
  function?: Function;
}) => {
  useEvaIcon();
  const router = useRouter();

  let tempFunc:Function;

  if(props.function){
    tempFunc = props.function
  }

  return (
    <TopBoxMol>
      {/* left */}

      {props.left === "back" && (
        <TopIconAtm onClick={() => router.back()}>
          <i data-eva="arrow-ios-back"></i>
        </TopIconAtm>
      )}


    {props.left === "close-outline" && (
        <TopIconAtm onClick={() => tempFunc()}>
          <i data-eva="close-outline"></i>
        </TopIconAtm>
      )}


      {props.left === "star-outline" && (
        <TopIconAtm>
          <Link href={"/my/unistar"}>
            <a>
              <i data-eva="star-outline"></i>
            </a>
          </Link>
        </TopIconAtm>
      )}

      {props.left === "nt" && <TopIconAtm></TopIconAtm>}




      {/* TEXT */}

      <TopTitleAtm>
        <p>{props.text}</p>
      </TopTitleAtm>

      {/* right */}

      {props.right === "settings-outline" && (
        <TopIconAtm>
          <Link href={"/my/settings"}>
            <a>
              <i data-eva={props.right}></i>
            </a>
          </Link>
        </TopIconAtm>
      )}

      {props.right === "email-outline" && (
        <TopIconAtm>
          <i data-eva={props.right}></i>
        </TopIconAtm>
      )}

      {props.right === "bell-outline" && (
        <TopIconAtm>
          <i data-eva={props.right}></i>
        </TopIconAtm>
      )}

      {props.right === "checkmark-outline" && (
        <TopIconAtm>
          <div>
            <i data-eva={props.right}></i>
          </div>
        </TopIconAtm>
      )}

      {props.right === undefined && <TopIconAtm></TopIconAtm>}
    </TopBoxMol>
  );
};
