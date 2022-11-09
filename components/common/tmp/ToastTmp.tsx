import React, { useEffect } from "react";
import { toast, ToastBar, Toaster } from "react-hot-toast";

export const ToastUtils = {

    
  success: (text: string) => {
    toast.success(text, {
      duration: 2000,
    });
  },
  error: (text: string) => {
    toast.error(text, {
      duration: 2000,
    });
  },
  toast: (text: string) => {
    toast(text, {
      duration: 2000,
    });
  },
  comment: (text: string,link:string,text2?:string) => {
    const moveLink = () => {
      if(link){
        window.location.replace(link)
      }
    }
    toast((t) => (
      <div style={{"display":"flex"}}>
        <div>{text}</div>
        <p 
        onClick={() => moveLink()}
        style={{"textDecorationLine":"underline"}}>이동하기</p>
      </div>
    ), {
      duration: 2000,
    });
  },
};

function ToastTmp() {
  return (
    <>
      <Toaster>
        {(t) => (
          <ToastBar
            toast={t}
            style={{
              ...t.style,
            }}
          />
        )}
      </Toaster>
    </>
  );
}

export default ToastTmp;
