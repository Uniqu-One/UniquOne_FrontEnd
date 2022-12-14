import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { CommentUtils } from "../../lib/utils/CommentUtils";
import { TokenState } from "../../states/recoil/TokenState";
import { UserInfoState } from "../../states/recoil/UserInfoState";
import { color } from "../../styles/theme";
import CommentInputMol from "./CommentInputMol";

const CommentBarOrgStyle = styled.div<{ inputStatus: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 66px;
  background-color: white;
  display: flex;
  border-top: 0.5px solid ${color.p_gray_md};

  img {
    border-radius: 100%;
    border: 1px solid ${color.p_gray_lt};
  }

  input {
    height: 42px;
    margin: 0;
    padding: 0;
  }
  padding: 0px 18px;

  div {
    margin: auto 0;
    :first-of-type {
      margin-right: 12px;
    }
    :last-of-type {
      position: relative;
      display: flex;
      // TODO - input box padding 조정 및 컬러 변경 공부
      input {
        width: calc(100vw - 96px);
        border: 0.5px solid ${color.p_gray_lt};
        border-radius: 9px;
      }
      p {
        position: absolute;
        line-height: 46px;
        font-size: 0.875rem;
        right: 12px;
        color: ${color.p_pruple};
        opacity: ${(props) => (props.inputStatus ? "100%" : "30%")};
      }
    }
  }
`;

function CommentBarOrg(props: { postId: string,tempParent?:number,setTempParent:Function,setParentComment:Function,userId?:string|number }) {
  const token = useRecoilValue(TokenState).token;
  const { postId,tempParent,setTempParent,setParentComment,userId } = props;
  const userImg = useRecoilValue(UserInfoState).cornImg

  const [inputText, setInputText] = useState("");
  const [inputStatus, setInputStatus] = useState(false);

  useEffect(() => {
    if (inputText !== "") {
      setInputStatus(true);
    } else {
      setInputStatus(false);
    }
  }, [inputText]);

  const handlePostComment = async () => {
    if(!tempParent){
      await CommentUtils.postParentComment(token, postId,inputText);
    } else {
      await CommentUtils.postChildComment(token, postId,tempParent,inputText);
    }

    
  };

  if(!userId){
    return <></>
  }


  return (
    <CommentBarOrgStyle inputStatus={inputStatus}>
      <div>
        <img  
          src={userImg ? userImg :"/assets/images/dummyUserImg.jpg"}
          alt="dummy user"
          width="42px"
          height="42px"
        />
      </div>
      <CommentInputMol inputText={inputText} setInputText={setInputText} handlePostComment={handlePostComment}  setTempParent={setTempParent} setParentComment={setParentComment}/>
    </CommentBarOrgStyle>
  );
}

export default CommentBarOrg;
