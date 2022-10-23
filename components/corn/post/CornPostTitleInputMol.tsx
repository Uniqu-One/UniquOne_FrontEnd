import styled from '@emotion/styled'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil';
import { CornPostState } from '../../../states/recoil/CornPostState';
import { color } from '../../../styles/theme';
import { postDataType } from '../../../types/postDataType';



const CornPostTitleInputMolStyle = styled.div`
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
    height: 24px;
    width: calc(98%);
    border: 0px;
    
  }
`

function CornPostTitleInputMol() {

  const [postData,setPostData] = useRecoilState(CornPostState)

  const [count, setCount] = useState(30)

  const onChangeTextHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    
    if(e.target.value.length<31){

      setPostData(() => {
  

        let newData = {...postData};
        newData.title = e.target.value
  
        return {...newData};
      })
  
      setCount(30-e.target.value.length)
    }

    

  }


    return(
      <CornPostTitleInputMolStyle>
        <h3>제목</h3>
        <textarea name="title" value={postData.title} onChange={(e)=>onChangeTextHandler(e)} placeholder="업로드할 포스트의 제목을 작성해주세요"></textarea>
      <hr/>
        <p>{count}</p>
      </CornPostTitleInputMolStyle>
    )

  }


export default CornPostTitleInputMol