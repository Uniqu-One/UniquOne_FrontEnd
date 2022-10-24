import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { CommentUtils } from "../../lib/utils/CommentUtils";

import { TokenState } from "../../states/recoil/TokenState";
import CommentBarOrg from "./CommentBarOrg";
import CommentListMol from "./CommentListMol";

import CommentOrg from "./CommentOrg";
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
  cornImgUrl:string;
  parentNickname?:string
};

const CommentTmpStyle = styled.div`
  padding-top: 50px;
  padding-bottom: 120px;
`;

function CommentTmp(props: { postId: string }) {
  const token = useRecoilValue(TokenState).token;
  const { postId } = props;
  const [commentList, setCommentList] = useState<CommentType[]>([]);
  const [tempParent, setTempParent] = useState<number>(0);
  const [parentComment,setParentComment] = useState<boolean>(true);

  const getCommentListData = async () => {
    const commentData: CommentType[] = await CommentUtils.getCommentList(
      token,
      postId
    );
    setCommentList([...commentData]);
  };

  useEffect(() => {
    console.log(tempParent);
    getCommentListData();
  }, [tempParent,parentComment]);


  return (
    <CommentTmpStyle>
      <CommentListMol commentList={commentList} setTempParent={setTempParent} />

      {/* <CommentOrg type="tail"/> */}
      {tempParent !== 0 && (
        <CommentTempParentModalMol
          tempParent={tempParent}
          setTempParent={setTempParent}
        />
      )}
      <CommentBarOrg
        postId={postId}
        tempParent={tempParent}
        setTempParent={setTempParent}
        setParentComment={setParentComment}
      />
    </CommentTmpStyle>
  );
}

export default CommentTmp;
