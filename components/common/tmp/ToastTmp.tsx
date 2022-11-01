import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";

function ToastTmp() {
  return (
    <>
      <Toaster 
      
      toastOptions={{
        success:{
          duration:2000  
        },
        error:{
        duration:2000
      }}}/>
    </>
  );
}

export default ToastTmp;
