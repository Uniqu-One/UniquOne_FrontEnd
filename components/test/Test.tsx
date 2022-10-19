import React from "react";
import { Oval } from "react-loader-spinner";
import { color } from "../../styles/theme";

function Test() {
  return (
    <>
 <Oval
  height={80}
  width={80}
  color={color.p_pruple}
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor={color.p_pruple}
  strokeWidth={3}
  strokeWidthSecondary={3}

/>
    </>
  );
}

export default Test;
