import {atom} from "recoil"
import { postDataType } from "../../types/postDataType"

const CornPostState = atom<postDataType>({
  key:"CornPostState",
  default:{
    desc: "",
    tags: "",
    type: "",
    category: "",
    condition: "",
    look: "",
    color: "",
  }
})

export {CornPostState}