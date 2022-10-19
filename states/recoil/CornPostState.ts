import {atom} from "recoil"
import { postDataType } from "../../types/postDataType"
import { v1 } from "uuid"

const CornPostState = atom<postDataType>({
  key:`CornPostState/${v1()}`,
  default:{
    imgList:[null,null,null,null,null],
    desc: "",
    tags: "",
    type: "",
    category: "",
    condition: "",

    look: [],
    color: [],
  }
})

export {CornPostState}