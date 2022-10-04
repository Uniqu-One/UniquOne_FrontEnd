import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import { useRecoilState } from "recoil";
import useEvaIcon from "../../../lib/hooks/useEvaIcon";
import { CornPostState } from "../../../states/recoil/CornPostState";
import { color } from "../../../styles/theme";
import { postDataType } from "../../../types/postDataType";
import BottomSheetRadioMol from "../../bottom_sheet/BottomSheetRadioMol";

const CornPostMenuBarAtmStyle = styled.div`
  color: ${color.p_gray_dk};
  line-height: 36px;
  height: 36px;
  border-bottom: 1px solid ${color.p_gray_lt};

  display: flex;
  justify-content: space-between;

  .right {
    display: flex;
    svg {
      margin: auto 0;
    }
  }
`;

function CornPostMenuBarAtm(props: {
  menu: { title: string; select: string; name: string };
}) {
  useEvaIcon();

  const [postData, setPostData] = useRecoilState(CornPostState);
  const { title, select, name } = props.menu;
  const [tempMenu, setTempMenu] = useState("");

  const handleOpenSelect = (name: string) => {
    setOpen((prev) => !prev);
    setTempMenu(name);
  };

  const handleTempSelect = (selectedTab: string) => {
    setPostData(() => {
      let newData = { ...postData };
      newData[name] = selectedTab;
      setOpen(false);

      return { ...newData };
    });
  };

  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, []);
  return (
    <>
      <CornPostMenuBarAtmStyle onClick={() => handleOpenSelect(name)}>
        <div>
          <h4>{title}</h4>
        </div>
        <div className="right">
          <p>{select}</p>
          <i data-eva="arrow-ios-forward-outline"></i>
        </div>
      </CornPostMenuBarAtmStyle>

      <BottomSheet open={open} onDismiss={() => setOpen(false)}>
        <BottomSheetRadioMol
          setOpen={setOpen}
          handleTempSelect={handleTempSelect}
          tempMenu={tempMenu}
        />
      </BottomSheet>
    </>
  );
}

export default CornPostMenuBarAtm;
