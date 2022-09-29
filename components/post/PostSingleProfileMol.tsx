import styled from '@emotion/styled'
import Image from 'next/image'
import React from 'react'

const PostSingleProfileMolStyle = styled.div`
display: flex;
img{
  border-radius: 100%;
}

div{

  :nth-last-of-type(1){
    margin-left: 12px;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 0.875rem;
    p{
      margin-top: 6px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
`

function PostSingleProfileMol() {
  return (
    <PostSingleProfileMolStyle>
    <div><Image src="/assets/images/dummyUserImg.jpg" alt="유저 더미 이미지" width={54} height={54}></Image></div>
    <div>
      <h3>샵 이름</h3>
      {/* TODO - 샵 설명 나중에 ... 바뀌도록 설정해야함*/}
      <p>샵 설명</p>
    </div>
  </PostSingleProfileMolStyle>
  )
}

export default PostSingleProfileMol