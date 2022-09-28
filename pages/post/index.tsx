import React from 'react'
import PostTmp from '../../components/common/tmp/PostTmp'
import TopTmp from '../../components/common/tmp/TopTmp'

function index() {
  return (
    <>
    <PostTmp type='lg'/>
    <PostTmp type='lg' opt="style"/>
    <PostTmp type='sm' size={42}/>
    </>
    
  )
}

export default index