import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useResetRecoilState } from 'recoil'
import { ToastUtils } from '../../components/common/tmp/ToastTmp'
import { LoginAuthState } from '../../states/recoil/LoginAuthState'
import { TokenState } from '../../states/recoil/TokenState'
import { UserInfoState } from '../../states/recoil/UserInfoState'

function logout() {
  const router = useRouter()

  const [check,setCheck] = useState(false)
  const resetToken = useResetRecoilState(TokenState)
  const resetUserInfo = useResetRecoilState(UserInfoState)
  const resetLoginState = useResetRecoilState(LoginAuthState)

  useEffect(() => {

    resetToken()
    resetUserInfo()
    resetLoginState()
    setCheck(true)

  },[])

  useEffect(() => {

    if(check === true){
      ToastUtils.toast('로그아웃이 완료되었습니다.')
      router.replace('/')
    }

  },[check])

  return (
    <div>logout</div>
  )
}

export default logout