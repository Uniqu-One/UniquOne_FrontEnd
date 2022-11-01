import styled from "@emotion/styled";
import React from "react";
import { useRecoilValue } from "recoil";
import useEvaIcon from "../../lib/hooks/useEvaIcon";
import { CommentUtils } from "../../lib/utils/CommentUtils";
import { ToastUtils } from "../../lib/utils/ToastUtils";
import { TokenState } from "../../states/recoil/TokenState";
import { color } from "../../styles/theme";

const CommentMyFuncMolStyle = styled.div`
  background-color: ${color.p_red};
  display: flex;
  padding: 5% 0;
  div {
    margin: 0 12px;
    fill: white;
  }
`;

function CommentMyFuncMol(props: {
  commentId: number;
  setTempParent: Function;
}) {
  useEvaIcon();
  const token = useRecoilValue(TokenState).token;
  const { commentId, setTempParent } = props;

  const handleDeleteComment = async () => {
    if (await CommentUtils.deleteMyComment(token, commentId)) {
      setTempParent(0);
    } else {
      ToastUtils.error('댓글이 이미 삭제되었습니다.')
    }
  };

  return (
    <>
      <CommentMyFuncMolStyle>
        <div className="edit">
          <i data-eva="edit-outline"></i>
        </div>

        <div className="delete" onClick={() => handleDeleteComment()}>
          <i data-eva="trash-outline"></i>
        </div>
      </CommentMyFuncMolStyle>
    </>
  );
}

export default CommentMyFuncMol;
