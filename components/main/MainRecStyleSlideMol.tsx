import styled from '@emotion/styled'
import React from 'react'
import PostLgOrg from '../common/org/PostLgOrg'
import PostMdOrg from '../common/org/PostMdOrg'

const MainRecStyleSlideMolStyle = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  height: 148px;
  margin-left: 18px;
  margin-top: 12px;

  > div{
    display: flex;
    justify-content: left;
    width: 180%;
    > div{
      margin-right: 12px;
    }
 }
`

function MainRecStyleSlideMol() {
  return (
    <>
    <MainRecStyleSlideMolStyle>
      <div>
          <PostMdOrg />
          <PostMdOrg />
          <PostMdOrg />
          <PostMdOrg />
      </div>
    </MainRecStyleSlideMolStyle>
    </>
  )
}

export default MainRecStyleSlideMol