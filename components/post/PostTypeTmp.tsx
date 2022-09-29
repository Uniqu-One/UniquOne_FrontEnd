import styled from '@emotion/styled'
import React from 'react'
import { color } from '../../styles/theme'

// TODO - 온클릭 함수로 팔로잉, 추천 내용 받아서 아래 새로 뿌림
// 해당 내용은 상단 부모 컴포넌트에서 받아옴
// TODO - 컬러 문제 해결해야함

const PostTypeTmpStyle = styled.div<{type:string}>`
height: 54px;
background-color: ${color.p_gray_lt};
display: flex;
line-height: 54px;
padding-left: 21px;
div{
  margin-right: 12px;
  
  h3{
    font-weight: 700;
  }
  
}
`

function PostTypeTmp(props:{type:string}) {
  console.log(props.type)
  return (
    <PostTypeTmpStyle type={props.type}>
      <div ><h3 className="following">팔로잉</h3></div>
      <div ><h3 className="rec">추천</h3></div>
    </PostTypeTmpStyle>
  )
}

export default PostTypeTmp