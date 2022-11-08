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

  const { postType, category, condition, look, color, price, productSize } =
    postData;

  const DETAIL_MENU = [
    { title: "포스트 분류", select: postType, name: "postType" },
    { title: "카테고리", select: category, name: "category" },
    { title: "룩", select: look, name: "look" },
    { title: "색상", select: color, name: "color" },
    { title: "사이즈", select: productSize, name: "productSize" },
    { title: "상태", select: condition, name: "condition" },
    { title: "가격", select: price, name: "price" },
  ];

  const [slice, setSlice] = useState(1);

  useEffect(() => {
    if (postType === "" || postType === "스타일") {
      setSlice(4);
    } else {
      setSlice(7);
    }
  }, [postType]);

  return (
    <CornPostDetailsOrgStyle>
      <h3>상세정보</h3>

      {DETAIL_MENU.slice(0, slice).map((menu) => {
        //@ts-ignore
        return <CornPostMenuBarMol key={menu.title} menu={menu} />;
      })}

    </CornPostDetailsOrgStyle>
  );
}

export default CornPostDetailsOrg;
