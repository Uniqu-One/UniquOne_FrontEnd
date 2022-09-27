import { useEffect } from 'react';
import React from 'react'
import * as eva from "eva-icons";

function useEvaIcon() {
  useEffect(() => {
    eva.replace();
  },[])
  return;
}

export default useEvaIcon