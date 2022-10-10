import styled from "@emotion/styled";
import React from "react";
import useEvaIcon from "../../lib/hooks/useEvaIcon";
import { color } from "../../styles/theme";
import { settingSingleMenuType } from "./MySettingBoxMol";

const MySettingBoxAtmStyle = styled.div`
  border-bottom: 0.5px solid ${color.p_gray_md};
  display: flex;
  justify-content: space-between;
  margin-top: 3px;
  
  p{
    color: ${color.p_gray_dk};
    padding: 9px;
  }

  svg{
    fill: ${color.p_gray_dk};
    margin: auto 0;
  }
`;

function MySettingBoxAtm(props: { title: string }) {
  useEvaIcon();

  const title = props.title;

  return (
    <>
      <MySettingBoxAtmStyle>
        <p>{title}</p>
        <i data-eva="arrow-ios-forward-outline"></i>
      </MySettingBoxAtmStyle>
    </>
  );
}

export default MySettingBoxAtm;
