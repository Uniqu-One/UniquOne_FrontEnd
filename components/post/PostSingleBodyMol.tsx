import styled from '@emotion/styled'
import React from 'react'

const PostSingleBodyMolStyle = styled.div`
  
  background-color: gray;

`

function PostSingleBodyMol() {
  return (
    <>
    <PostSingleBodyMolStyle>
      <div>
        <h2>아이디</h2>
        <h3>제목</h3>
      </div>
      <div>
        <p>descs</p>
      </div>
      <div>
        tags
      </div>
      <div>
        details [color,...]
      </div>
    </PostSingleBodyMolStyle>
    </>
  )
}

export default PostSingleBodyMol