import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import useEvaIcon from "../../../lib/hooks/useEvaIcon";
import { color } from "../../../styles/theme";
import { TopIconAtm } from "../atm/TopIconAtm";
import { TopTitleAtm } from "../atm/TopTitleAtm";
import { TopBoxMol } from "../mol/TopBoxMol";

export const TopOptionalOrg = (props: {
  left?: string;
  text?: string;
  right?: string;
  function?: Function;
  status?: boolean;
  function_right?:Function
  tempCnt?:number
}) => {
  useEvaIcon();
  const router = useRouter();
  const tempCnt = props.tempCnt
  
  let tempFunc: Function;

  if (props.function) {
    tempFunc = props.function;
  }


  const handleBackClick = () => {
    if(props.function){
      props.function()
      router.back()
    } else {
      router.back()
    }
  }

  return (
    <TopBoxMol>
      {/* left */}
      {props.left === "back" && (
        <TopIconAtm onClick={() => handleBackClick()}>
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
                <div
                style={{"margin":"auto 0", "position":"relative"}}
      
                className="noti_icon"
                onClick={() => {
                  console.log(1);
                  router.push("/noti");
                }}
              >
                {tempCnt!==0 && <div className="count_check"></div>}
                <TopIconAtm>
                  <i data-eva="bell-outline"></i>
                </TopIconAtm>
              </div>
      )}

      {props.right === "checkmark-outline" && (
        <TopIconAtm>
          {/* @ts-ignore */}
          <div onClick={props.function_right && props.function_right}
            style={{
              fill: `${props.status ? color.p_pruple : color.p_gray_dk}`,
            }}
          >
            <i data-eva={props.right}></i>
          </div>
        </TopIconAtm>
      )}

      {props.right === undefined && <TopIconAtm></TopIconAtm>}
    </TopBoxMol>
  );
};
