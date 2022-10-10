import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { CornPostState } from "../../../states/recoil/CornPostState";
import { color } from "../../../styles/theme";
import { postDataType } from "../../../types/postDataType";
import CornPostMenuBarAtm from "./CornPostMenuBarAtm";


const CornPostDetailsOrgStyle = styled.div`
  color: ${color.p_gray_dk};
  h3 {
    font-weight: 650;
    padding: 9px 0px;
  }
`;

function CornPostDetailsOrg() {
<<<<<<< HEAD

  const [postData, setPostData] = useRecoilState(CornPostState)

  const { type, category, condition, look, color } = postData;
=======
  
  const [postData,setPostData] = useRecoilState(CornPostState);

  const {type, category, condition,look,color} = postData
>>>>>>> 52d6e1793de3bd9cc5199230c332d16269c36b93

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
          />
        );
      })}
    </CornPostDetailsOrgStyle>
  );
}

export default CornPostDetailsOrg;
