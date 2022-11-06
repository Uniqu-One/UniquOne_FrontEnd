import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({});

export const TokenState = atom({
  key:"SubscribeState",
  default:{},
  effects_UNSTABLE:[persistAtom]
})