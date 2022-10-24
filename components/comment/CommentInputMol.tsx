import styled from "@emotion/styled";
import React from "react";

function CommentInputMol(props: {
  setInputText: Function;
  inputText: string;
  handlePostComment: Function;
  setTempParent: Function;
  setParentComment:Function
}) {
  const { setInputText, inputText, handlePostComment, setTempParent,setParentComment } = props;

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setInputText(e.target.value);
  };

  const handlePostCommentBtn = async () => {
    if (inputText) {
      await handlePostComment();
      setInputText("");
      setTempParent(0);
      setParentComment(true);
    }
  };

  return (
    <div>
      <input
        onChange={(e) => handleChangeInput(e)}
        onClick={()=>setParentComment(false)}
        value={props.inputText}
        type="text"
      />{" "}
      <p onClick={() => handlePostCommentBtn()}>게시</p>
    </div>
  );
}

export default CommentInputMol;
