import {atom} from "recoil"
import { v1 } from "uuid"
import { searchFilterType } from "../../types/searchFilterType"

const SearchFilterState = atom<searchFilterType>({
  key:`SearchFilterState/${v1()}`,
  default:{
    색상:[],
    상태:[],
    카테고리:[],
    룩:[]
  }
})

export {SearchFilterState}