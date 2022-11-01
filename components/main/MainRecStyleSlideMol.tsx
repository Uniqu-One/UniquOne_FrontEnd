import styled from '@emotion/styled'
import React from 'react'
import PostLgOrg from '../common/org/PostLgOrg'
import PostMdOrg from '../common/org/PostMdOrg'

const MainRecStyleSlideMolStyle = styled.div<{length:number}>`
  overflow-x: scroll;
  overflow-y: hidden;
  height: 148px;
  margin-left: 18px;
  margin-top: 12px;

  > div{
    display: flex;
    justify-content: left;
    width: calc(80*2%);
    > div{
      margin-right: 12px;
    }
 }
`

function MainRecStyleSlideMol() {

  const dummy = [1,2,3,4]

  return (
    <>
    <MainRecStyleSlideMolStyle length={dummy.length}>
      <div>
      {dummy.map((box,idx) => {
      return <PostMdOrg key={idx}/>
      })}
      </div>
    </MainRecStyleSlideMolStyle>
    </>
  )
}

export default MainRecStyleSlideMol