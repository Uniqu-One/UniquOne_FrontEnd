import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import useEvaIcon from "../../../lib/hooks/useEvaIcon";
import { color } from "../../../styles/theme";
import { menuType } from "./CornMainTmp";

const CornMainBarMenuButtonMolStyle = styled.div`
  height: 36px;
  display: flex;
  justify-content: space-between;
  line-height: 36px;
  border-bottom: 1px solid ${color.p_gray_lt};

  div {
    :first-of-type {
      display: flex;
      div {
        :first-of-type {
          /* background-color: red; */
          margin: auto 0;
          margin-right: 6px;
        }
      }
    }
  }

  //TODO - 오른쪽 화살표 방향 맞추기
`;

function CornMainBarMenuButtonMol(props: { menu: menuType }) {
  const { title, link, icon } = props.menu;
  useEvaIcon();
  return (
    <>
      {" "}
      <Link href={link}>
        <a>
          <CornMainBarMenuButtonMolStyle>
            <div className="menu_left">
              <div>
                <i data-eva={icon} data-eva-fill={color.p_gray_dk}></i>
              </div>
              <div>{title}</div>
            </div>

            <div className="right_icon">
              <div>
                <i data-eva="arrow-ios-forward-outline"></i>
              </div>
            </div>
          </CornMainBarMenuButtonMolStyle>
        </a>
      </Link>
    </>
  );
}

export default CornMainBarMenuButtonMol;
