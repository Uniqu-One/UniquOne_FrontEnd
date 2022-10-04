import styled from '@emotion/styled'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil';
import { CornPostState } from '../../../states/recoil/CornPostState';
import { color } from '../../../styles/theme';
import { postDataType } from '../../../types/postDataType';



const CornPostDescInputMolStyle = styled.div`
color: ${color.p_gray_dk};
h3{
  font-weight: 650;
  padding: 9px 0px;
}
p{
  color: ${color.p_gray_md};
  text-align: right;
  font-size: 0.875rem;
}
  textarea{
    resize: none;
    height: 40px;
    width: calc(98%);
    border: 0px;
    
  }
`

function CornPostDescInputMol() {

  const [postData, setPostData] = useRecoilState(CornPostState);
  
  console.log(postData)

  const [count, setCount] = useState(1000)

  const onChangeTextHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    
    if(e.target.value.length<1001){

      setPostData(() => {
  
        
        let newData = {...postData};
        newData.desc = e.target.value
  
        return {...newData};
      })
  
      setCount(1000-e.target.value.length)
    }

    

  }


    return(
      <CornPostDescInputMolStyle>
        <h3>설명</h3>
        <textarea name="desc" value={postData.desc} onChange={(e)=>onChangeTextHandler(e)} placeholder="업로드한 스타일에 관한 정보를 입력해주세요!&#13;&#10;제목을 포함하여 재질과, 상태, 사이즈와 스타일을 적어주세요!"></textarea>
      <hr/>
        <p>{count}</p>
      </CornPostDescInputMolStyle>
    )

  }


export default CornPostDescInputMol