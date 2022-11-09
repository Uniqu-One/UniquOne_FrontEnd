import { atom } from 'recoil';

export const UserInfoState = atom({
  key:"UserInfoState",
  default:{
    userId:undefined,
    cornId:undefined,
    cornImg:undefined,
    userNickName:undefined
  }
})