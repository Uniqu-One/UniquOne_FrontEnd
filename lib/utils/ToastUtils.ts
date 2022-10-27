import { toast } from "react-hot-toast"

export const ToastUtils = {

  success:(text:string) => {
    toast.success(text)
  },
  error:(text:string) => {
    toast.error(text)
  }

}