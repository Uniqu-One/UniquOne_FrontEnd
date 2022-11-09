import axios from "axios"

export const NotiUtils = {

  getNotiDatas: async (token:string,pageNum:number|string) => {

    
    return await axios.get(`${process.env.NEXT_PUBLIC_URL_AWS}/noti/${pageNum}`,{
      headers:{
        Authorization:token
      }
    }).then(res => {
      // console.log(res)
      return res.data.data
    })
      .catch(err => console.error(err))

  },

  getNotiCount: async (token:string) => {
    return await axios.get(`${process.env.NEXT_PUBLIC_URL_AWS}/noti/nonCnt`,{
      headers:{
        Authorization:token
      }
    }).then(res => {
      // console.log(res.data.data)
      return res.data.data
    })
      .catch(err => console.error(err))
  }

}