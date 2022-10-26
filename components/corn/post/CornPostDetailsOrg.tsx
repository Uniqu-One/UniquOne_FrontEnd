import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { CornPostState } from "../../../states/recoil/CornPostState";
import { color } from "../../../styles/theme";
import CornPostMenuBarMol from "./CornPostMenuBarMol";

const CornPostDetailsOrgStyle = styled.div`
  color: ${color.p_gray_dk};
  h3 {
    font-weight: 650;
    padding: 9px 0px;
  }
`;

function CornPostDetailsOrg() {
  const [postData, setPostData] = useRecoilState(CornPostState);

  const { type, category, condition, look, color, price, productSize } =
    postData;

  const DETAIL_MENU = [
    { title: "포스트 분류", select: type, name: "type" },
    { title: "카테고리", select: category, name: "category" },
    { title: "상태", select: condition, name: "condition" },
    { title: "룩", select: look, name: "look" },
    { title: "색상", select: color, name: "color" },
    { title: "사이즈", select: productSize, name: "productSize" },
    { title: "가격", select: price, name: "price" },
  ];

  const [slice, setSlice] = useState(1);

  useEffect(() => {
    if (type === "" || type === "스타일") {
      setSlice(1);
    } else {
      setSlice(7);
    }
  }, [type]);

  return (
    <CornPostDetailsOrgStyle>
      <h3>상세정보</h3>

      {DETAIL_MENU.slice(0, slice).map((menu) => {
        return <CornPostMenuBarMol key={menu.title} menu={menu} />;
      })}

    </CornPostDetailsOrgStyle>
  );
}

export default CornPostDetailsOrg;
