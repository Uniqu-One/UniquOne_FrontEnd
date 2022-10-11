import { useState } from "react";

type objType = {
  id: string;
  pwd: string;
};

export default function App() {
  const [obj, setObj] = useState({
    id: "",
    pwd: "",
  });

  const handleChangeObj = () => {
    setObj((prev) => ({...prev,id:"연주씌"}));
  };

  

  return (
    <>
      <div onClick={() => handleChangeObj()}>BUTTON </div>
    </>
  );
}
