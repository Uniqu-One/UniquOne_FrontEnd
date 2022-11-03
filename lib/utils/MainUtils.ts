import axios from "axios"

export const MainUtils = {

  getThisWeekUnicorn:async () => {
    return await axios.get(`${process.env.NEXT_PUBLIC_URL_AWS}/admin/thisWeek`)
    .then(res => {
      
      return res.data.data
    })
    .catch(err => console.log(err))
  }

}