import styled from "@emotion/styled";
import React from "react";
import { toast, Toaster } from "react-hot-toast";
import { useRecoilState } from "recoil";
import useEvaIcon from "../../lib/hooks/useEvaIcon";
import { CornPostState } from "../../states/recoil/CornPostState";
import { color } from "../../styles/theme";
import { postDataType } from "../../types/postDataType";

const BottomSheetTopMolStyle = styled.div`
  height: 48px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  line-height: 48px;
  /* background-color: red; */
  padding: 0px 18px;
  border-bottom: 0.5px solid ${color.p_gray_md};
  div{
    svg{
      margin: auto 0;
      height: 100%;
      /* background-color: lightblue; */
    }
    
  }
  .checked{
    fill: ${color.p_pruple};
  }
`


function BottomSheetTopMol(props:{type:string, setOpen:Function, tempSelect:string[], setTempSelect:Function}) {

  useEvaIcon()
  const notify = () => toast.error("룩을 두개 이하로 선택해주세요");
  const [postData, setPostData] = useRecoilState(CornPostState);

  const handlePostData = () => {

    if(props.tempSelect.length >2){
      notify()
      return;
    } else {
      const newData = {...postData};
      newData.look = [...props.tempSelect]
      setPostData(newData)
      props.setOpen(false)
    }

    
  }

  return (
    <>
    <Toaster/>

      <BottomSheetTopMolStyle>
        <div onClick={() => props.setOpen(false)}><i data-eva="arrow-ios-back-outline"></i></div>
        <div>{props.type === "look" ? "룩":"색상"}</div>
        <div onClick={()=>handlePostData()} className={props.tempSelect.length>0 ? "checked": "unchecked"}><i data-eva="checkmark-outline"></i></div>
      </BottomSheetTopMolStyle>
    </>
  );
}

export default BottomSheetTopMol;
