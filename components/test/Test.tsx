import styled from "@emotion/styled";
import { useState } from "react";
import { motion } from "framer-motion";

const TestStyle = styled.div`

.menu{
  display: flex;
  justify-content: space-between;
  .icon{
    width: 45px;
    height: 45px;
    background-color: lightblue;
  }
  .point{
    width: 16px;
    height: 16px;
    background-color: red;
    margin: 1px auto;
  }
}
`;

export default function Test() {
  const list = [0, 1, 2, 3, 4];

  const [templist, setTempList] = useState(0)

  const handleTempMenu = (idx:number) => {
    setTempList(idx)
  }

  return (
    <>
      <TestStyle>
        <div className="menu">
        {list.map((menu,idx) => {
          return <div key={menu} onClick={() => handleTempMenu(idx)}>
            <div className="icon">hi</div>
            {templist===idx && <motion.div layoutId="underline" className="point"></motion.div>}
          </div>;
        })}
        </div>
      </TestStyle>
    </>
  );
}
