import styled from "@emotion/styled";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { CornPostState } from "../../../states/recoil/CornPostState";
import { color } from "../../../styles/theme";
import { ToastUtils } from "../../common/tmp/ToastTmp";


const CornPostTagsInputMolStyle = styled.div`
  color: ${color.p_gray_dk};
  h3 {
    font-weight: 650;
    padding: 9px 0px;
  }
  p {
    color: ${color.p_gray_md};
    text-align: right;
    font-size: 0.875rem;
  }
  input {
    width: calc(98%);
    border: 0px;
  }
`;

function CornPostTagsInputMol() {

  const [postData,setPostData] = useRecoilState(CornPostState)

  const [count, setCount] = useState(5);

  const onChangeTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    //TODO - 글자 개수에 대한 유효성 검사 추가
    let length = true;

    e.target.value.split("#").map(value => {
      
      if(value.length > 9){
        length = false;
        return;
      }
    })
//@ts-ignore
    if(length === false){
      ToastUtils.error('태그는 10자 이하로 작성해주세요!')
      return ;
    }


    if(e.target.value.split("#").length -1 < 6){
      let newData = {...postData};
      newData.tags = e.target.value;
      setPostData({ ...newData });
  
      setCount(5 - (e.target.value.split("#").length - 1));
    }
    

  };

  return (
    <CornPostTagsInputMolStyle>
      <h3>태그</h3>
      <input
        onChange={(e) => onChangeTextHandler(e)}
        type="text"
        value={postData.tags}
        placeholder="아이템의 특징을 잘 나타낼 수 있는 태그를 작성해주세요!"
      />
      <hr />
      <p>{count}</p>
    </CornPostTagsInputMolStyle>
  );
}

export default CornPostTagsInputMol;
