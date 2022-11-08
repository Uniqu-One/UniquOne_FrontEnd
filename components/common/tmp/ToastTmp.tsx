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
  comment: (text: string) => {
    toast((t) => (
      <div style={{"display":"flex"}}>
        <div>{text}</div>
        <p style={{"textDecorationLine":"underline"}}>이동하기</p>
      </div>
    ), {
      duration: 1500,
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
