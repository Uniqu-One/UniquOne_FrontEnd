import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import useEvaIcon from "../../../lib/hooks/useEvaIcon";
import { TopIconAtm } from "../atm/TopIconAtm";
import { TopTitleAtm } from "../atm/TopTitleAtm";
import { TopBoxMol } from "../mol/TopBoxMol";

export const TopOptionalOrg = (props: {
  left?: string;
  text?: string;
  right?: string;
}) => {
  useEvaIcon();
  const router = useRouter();

  return (
    <TopBoxMol>
      {/* left */}

      {props.left === "back" && (
        <TopIconAtm onClick={() => router.back()}>
          <i data-eva="arrow-ios-back"></i>
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

      {props.right === undefined && <TopIconAtm></TopIconAtm>}
    </TopBoxMol>
  );
};
