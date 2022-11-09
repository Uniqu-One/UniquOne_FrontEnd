import styled from "@emotion/styled";
import React from "react";
import useEvaIcon from "../../lib/hooks/useEvaIcon";
import { color } from "../../styles/theme";

const CommentTempParentModalMolStyle = styled.div`
  position: fixed;
  height: 42px;
  margin-top: 42px;
  background-color: lightgray;
  bottom: 66px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  div {
    margin: auto 18px;
    font-size: 0.875rem;
    color: ${color.p_gray_md};
    svg {
      fill: ${color.p_gray_md};
      width: 20px;
      height: 20px;
    }
  }
`;

function CommentTempParentModalMol(props: {
  setTempParent: Function;
  tempParent: number;
}) { 

  
  useEvaIcon();
  const { setTempParent, tempParent } = props;
  
  return (
    <CommentTempParentModalMolStyle>
      <div>
        {tempParent === -1 ? (
          <p>내 댓글 수정중</p>
        ) : (
          <p>답글 남기는 중</p>
        )}
      </div>
      <div onClick={() => setTempParent(0)}>
        <i data-eva="close-outline"></i>
      </div>
    </CommentTempParentModalMolStyle>
  );
}

export default CommentTempParentModalMol;
