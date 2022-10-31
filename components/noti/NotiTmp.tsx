import React from 'react'
import { useRecoilValue } from 'recoil'
import { NotiUtils } from '../../lib/utils/NotiUtils'
import { TokenState } from '../../states/recoil/TokenState'

function NotiTmp() {

  const token = useRecoilValue(TokenState).token

  const notiData = NotiUtils.getNotiDatas(token,1)

  return (
    <div>NotiTmp</div>
  )
}

export default NotiTmp