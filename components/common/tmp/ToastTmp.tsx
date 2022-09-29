import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { toast } from "react-hot-toast";
import UniStarAtm from "../atm/UniStarAtm";

const notify = () => toast.success("지금 N명이 이 게시물을 보고 있어요!");

function ToastTmp() {

  useEffect(() => {
    notify()
    return ()=>{}
  },[])

  return (
    <>
      <Toaster/>
    </>
  );
}

export default ToastTmp;
