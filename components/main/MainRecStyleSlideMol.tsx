import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { PostUtils } from '../../lib/utils/PostUtils'
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


  const [tempData,setTempData] = useState([])

  const handleUpdateData = async () => {
    setTempData(await PostUtils.getThisSeasonsData("OTC_1"))
  }

  useEffect(() => {

    handleUpdateData()

  },[])

  return (
    <>
    <MainRecStyleSlideMolStyle length={tempData && tempData.length}>
      <div>
      {tempData && tempData.map((data,idx) => {
        const post = {
          postId:data.postId,
          postImg:data.postImgUrl
        }
      return <PostMdOrg key={idx} post={post}/>
      })}
      </div>
    </MainRecStyleSlideMolStyle>
    </>
  )
}

export default MainRecStyleSlideMol