import styled from '@emotion/styled'
import React from 'react'


function CommentInputMol(props:{setInputText:Function, inputText:string}) {

  const handleChangeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    props.setInputText(e.target.value)
  }

  return (
    <div>
    <input onChange={(e)=>handleChangeInput(e)} value={props.inputText} type="text"/> <p>게시</p>
  </div>
  )
}

export default CommentInputMol