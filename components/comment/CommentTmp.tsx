import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { CommentUtils } from "../../lib/utils/CommentUtils";
import { LoginUtils } from "../../lib/utils/LoginUtils";

import { TokenState } from "../../states/recoil/TokenState";
import { UserInfoState } from "../../states/recoil/UserInfoState";
import { color } from "../../styles/theme";
import QuestionMarkAtm from "../common/atm/QuestionMarkAtm";
import CommentBarOrg from "./CommentBarOrg";
import CommentListMol from "./CommentListMol";
import CommentTempParentModalMol from "./CommentTempParentModalMol";

export type CommentType = {
  children: [];
  commentId: number;
  content: string;
  depth: number;
  modDate: string;
  parentId: null | number;
  regDate: string;
  userId: number;
  writerNick: string;
  cornImgUrl: string;
  parentNickname?: string;
};

const CommentTmpStyle = styled.div`
  padding-top: 50px;
  padding-bottom: 120px;

  .no-data{
    margin-top: 30vh;
    text-align: center;
    color: ${color.p_gray_md};
    svg{
      fill: ${color.p_gray_md};
      width: 48px;
      height: 48px;
    }
    p{
      margin-top: 6px;
    }
  }
`;

function CommentTmp(props: { postId: string }) {
  const token = useRecoilValue(TokenState).token;
  const userId = useRecoilValue(UserInfoState);
  const { postId } = props;
  const [commentList, setCommentList] = useState<CommentType[]>([]);
  const [tempParent, setTempParent] = useState<number>(0);
  const [parentComment, setParentComment] = useState<boolean>(true);

  const getCommentListData = async () => {
    const commentData: CommentType[] = await CommentUtils.getCommentList(
      token,
      postId
    );
    setCommentList([...commentData]);
  };

  useEffect(() => {
    getCommentListData();
  }, [tempParent, parentComment]);

  if (commentList[0] === undefined) {
    return (
      <CommentTmpStyle>
        <div className="no-data">
          <QuestionMarkAtm />
          <p>등록된 댓글이 없습니다.</p>
        </div>
        <CommentBarOrg
        userId = {userId.userId}
        postId={postId}
        tempParent={tempParent}
        setTempParent={setTempParent}
        setParentComment={setParentComment}
      />
      </CommentTmpStyle>
    );
  }

  return (
    <CommentTmpStyle>
      <CommentListMol
        commentList={commentList}
        setTempParent={setTempParent}
        userId={userId.userId}
      />

      {tempParent !== 0 && (
        <CommentTempParentModalMol
          tempParent={tempParent}
          setTempParent={setTempParent}
        />
      )}
      <CommentBarOrg
        userId = {userId.userId}
        postId={postId}
        tempParent={tempParent}
        setTempParent={setTempParent}
        setParentComment={setParentComment}
      />
    </CommentTmpStyle>
  );
}

export default CommentTmp;
