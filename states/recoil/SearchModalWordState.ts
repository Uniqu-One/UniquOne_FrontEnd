import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({});

export const SearchModalWordState = atom({
  key:"SearchModalWordState",
  default:[],
  effects_UNSTABLE:[persistAtom]
})