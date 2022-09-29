import styled from '@emotion/styled'
import React from 'react'
import UniStarMol from '../common/mol/UniStarMol'
import PostCommentAtm from './PostCommentAtm'
import PostHeartAtm from './PostHeartAtm'

const PostFuncBarMolStyle = styled.div`
  height: 54px;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  
  div{
    margin: auto 21px auto 18px;
    
    :first-of-type{
        svg{
          margin-right: 9px;
        }
    }
  }
`

function PostFuncBarMol() {
  return (
    <PostFuncBarMolStyle>
      <div>
        <PostHeartAtm/>
        <PostCommentAtm/>
      </div>

      <div>
        <UniStarMol/>
      </div>
    </PostFuncBarMolStyle>
  )
}

export default PostFuncBarMol