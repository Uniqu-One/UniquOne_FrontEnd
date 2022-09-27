import { useRouter } from "next/router";
import React from "react";
import useEvaIcon from "../../../hooks/useEvaIcon";
import { TopIconAtm } from "../atm/TopIconAtm";
import { TopTitleAtm } from "../atm/TopTitleAtm";
import { TopBoxMol } from "../mol/TopBoxMol";

export const TopOptionalOrg = (props: {
  left: string;
  text?: string;
  right?: string;
}) => {
  useEvaIcon();
  const router = useRouter();

  return (
    <TopBoxMol>
      {props.left === "back" ? (
        <TopIconAtm onClick={() => router.back()}>
          <i data-eva="arrow-ios-back"></i>
        </TopIconAtm>
      ) : (
        <TopIconAtm>
          <i data-eva="close-outline"></i>
        </TopIconAtm>
      )}

      <TopTitleAtm>
        <p>{props.text}</p>
      </TopTitleAtm>

      {props.right === "check" ? (
        <TopIconAtm>
          <i data-eva="checkmark"></i>
        </TopIconAtm>
      ) : (
        <TopIconAtm></TopIconAtm>
      )}
    </TopBoxMol>
  );
};
