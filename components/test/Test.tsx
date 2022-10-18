import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const TestStyle = styled.div`
display: flex;

  .box{
  background-color: red;
  display: flex;
  justify-content: space-between;
  }
  .underBox{
    background-color: lightblue;
    width: 100px;
    height: 100px;
    position: fixed;
    top: 100px;
    
  }
`;

function Test() {
  const [selectedId, setSelectedId] = useState<string | null>("");

  const items = [
    {
      id: "id1",
      subtitle: "sub",
      title: "title",
    },
    {
      id: "id2",
      subtitle: "sub2",
      title: "title2",
    },
  ];

  return (
    <>
      <TestStyle>
        {items.map((item) => (
          <motion.div
            className="box"
            key={item.id}
            layoutId={item.id}
            onClick={() => setSelectedId(item.id)}
          >
            <motion.h2>{item.title}</motion.h2>
          </motion.div>
        ))}

        <AnimatePresence>
          {selectedId && (
            <motion.div layoutId={selectedId} className="underBox" onClick={() => setSelectedId(null)}>
              <motion.h5>"gkdl"</motion.h5>
              <motion.h2>"gkdl"</motion.h2>
            </motion.div>
          )}
        </AnimatePresence>
      </TestStyle>
    </>
  );
}

export default Test;
