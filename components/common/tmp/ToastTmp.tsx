import React from "react";
import { Toaster } from "react-hot-toast";
import { toast } from "react-hot-toast";
import UniStarAtm from "../atm/UniStarAtm";

const notify = () => toast.success("로그인에 성공하셨습니당");

function ToastTmp() {
  return (
    <>
      <button onClick={notify}>Make Me toast</button>
      <Toaster/>
    </>
  );
}

export default ToastTmp;
