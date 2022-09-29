import React, { useState } from "react";
import UniStarAtm from "../atm/UniStarAtm";


function UniStarMol() {
  const [count, setCount] = useState(0);

  const handleSetCount = () => {
    if (count === 3) {
      setCount(count - 3);
    } else {
      setCount(count + 1);
    }
  };

  return (
    <>
      <span onClick={handleSetCount}>
        <UniStarAtm count={count} />
      </span>
    </>
  );
}

export default UniStarMol;
