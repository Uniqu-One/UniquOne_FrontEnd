import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil';
import { FollowUtils } from '../../lib/utils/FollowUtils';
import { TokenState } from '../../states/recoil/TokenState';
import { UserInfoState } from '../../states/recoil/UserInfoState';
import UserImgAtm from '../common/atm/UserImgAtm'
import { ToastUtils } from '../common/tmp/ToastTmp';

function ProfileFollowCardSingleMol(props:{user:{}}) {
  const myCornId = useRecoilValue(UserInfoState).cornId

  const token = useRecoilValue(TokenState).token
  const user = props.user
  //@ts-ignore
  const cornId = props.user.cornId
  //@ts-ignore

  const [follow,setFollow] = useState(false);

  const handleUpdateFollow = async () => {


    if(follow === false){
      if(await FollowUtils.registerFollow(token,cornId)){
        setFollow(true)
        ToastUtils.toast('유저를 팔로우 하였습니다.')
      }
      

    }
    if(follow === true){
      // console.log(cornId)
      if(await FollowUtils.cancelFollow(token,cornId)){
        setFollow(false)
        ToastUtils.toast('유저를 팔로우 취소 하였습니다.')
      } 
    }
  }


  useEffect(() => {
    //@ts-ignore
    setFollow(user.isFollow)
  },[user])

  return (
  <>
  {/* @ts-ignore */}
    <Link href={`/profile/${user.cornId}`}>
    <a>
      <div className="corn_img_name">
        {/* @ts-ignore */}
        <UserImgAtm width={48} height={48} url={user.cornImgUrl} />
        <div>
          <p className="user_info">
            {/* @ts-ignore */}
            <p>{user.cornTitle ? user.cornTitle : user.cornTitleName}</p>
            {/* @ts-ignore */}
            <p>{user.userName ? user.userName: user.userNickName}</p>
          </p>
        </div>
      </div>
    </a>
  </Link>

  {(follow === null) || (myCornId === cornId)? <></>:

  <div className={`follow_btn ${follow ? null : "check"}` } onClick={() => {handleUpdateFollow()}}>
    <p>{follow ? "팔로잉" : "팔로우"}</p>
  </div>
  }



  </>
  )
}

export default ProfileFollowCardSingleMol