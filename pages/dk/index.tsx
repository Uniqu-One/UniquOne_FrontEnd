import React, { useState } from 'react'

function index() {

  const [testUrl, setTestUrl] = useState("")

  const onChangeUrl = (e:React.ChangeEvent<HTMLInputElement>) => {
    setTestUrl(e.target.value)
  }

  return (
    <>
    <input type="text" value={testUrl} onChange={(e) => onChangeUrl(e)}/>
      <button onClick={()=>window.open(testUrl)} >이동하기</button>
    </>
  )
}

export default index

