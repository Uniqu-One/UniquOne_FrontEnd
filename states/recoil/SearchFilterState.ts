import {atom} from "recoil"
import { searchFilterType } from "../../types/searchFilterType"

const SearchFilterState = atom<searchFilterType>({
  key:"SearchFilterState",
  default:{
    색상:[],
    상태:[],
    카테고리:[],
    룩:[]
  }
})

export {SearchFilterState}