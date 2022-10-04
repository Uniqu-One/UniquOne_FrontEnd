import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { color } from "../../../styles/theme";
import CornPostMenuBarAtm from "./CornPostMenuBarAtm";
import { postDataType } from "./CornPostTmp";

const CornPostDetailsOrgStyle = styled.div`
  color: ${color.p_gray_dk};
  h3 {
    font-weight: 650;
    padding: 9px 0px;
  }
`;

function CornPostDetailsOrg(props: {
  postData: postDataType;
  setPostData: Function;
}) {
  const { type, category, condition, look, color } = props.postData;

  const DETAIL_MENU = [
    { title: "포스트 분류", select: type, name: "type" },
    { title: "카테고리", select: category, name: "category" },
    { title: "상태", select: condition, name: "condition" },
    { title: "룩", select: look, name: "look" },
    { title: "색상", select: color, name: "color" },
  ];

  
  const [slice,setSlice] = useState(5)

  useEffect(() => {

    if(type === "" || type === "스타일" ){
      setSlice(1)
      //TODO - 데이터 초기화 작업
    } else{
      setSlice(5)
    }

  },[type])

  return (
    <CornPostDetailsOrgStyle>
      <h3>상세정보</h3>

      { DETAIL_MENU.slice(0,slice).map((menu) => {

        return (
          <CornPostMenuBarAtm
            key={menu.title}
            menu={menu}
            setPostData={props.setPostData}
          />
        );
      })}
    </CornPostDetailsOrgStyle>
  );
}

export default CornPostDetailsOrg;
