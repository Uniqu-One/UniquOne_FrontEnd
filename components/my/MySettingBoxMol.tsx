import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import { mySettingMenuListData } from "../../public/assets/datas/mySettingMenuListData";
import { color } from "../../styles/theme";
import MySettingBoxAtm from "./MySettingBoxAtm";

export type settingSingleMenuType = {
  title: string;
  link: string;
};

const MySettingBoxMolStyle = styled.div`
  padding-top: 50px;
  margin: 0 18px;

  h3 {
    color: ${color.p_pruple};
    font-weight: 600;
    margin-top: 24px;
    margin-bottom: 12px;
  }
`;

function MySettingBoxMol() {
  const SETTING_MENU_LIST = mySettingMenuListData;

  return (
    <>
      <MySettingBoxMolStyle>
        {SETTING_MENU_LIST.map((MENUS, idx) => {
          {
            return (
              <>
                <h3 key={idx}>{Object.keys(MENUS)}</h3>
                {Object.values(MENUS)[0].map(
                  (menu: settingSingleMenuType, idx: number) => {
                    {
                      return (
                        <Link href={menu.link} key={idx+100}>
                          <a>
                            <MySettingBoxAtm title={menu.title} />
                          </a>
                        </Link>
                      );
                    }
                  }
                )}
              </>
            );
          }
        })}
      </MySettingBoxMolStyle>
    </>
  );
}

export default MySettingBoxMol;
