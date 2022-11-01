import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";

function ToastTmp() {
  return (
    <>
      <Toaster 
      
      toastOptions={{
        success:{
          duration:1500  
        },
        error:{
        duration:1500
      }}}/>
    </>
  );
}

export default ToastTmp;
