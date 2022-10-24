import React from "react";
import { useRecoilValue } from "recoil";
import { UserInfoState } from "../../states/recoil/UserInfoState";
import CommentOrg from "./CommentOrg";
import { CommentType } from "./CommentTmp";

function CommentListMol(props: {
  commentList: CommentType[];
  setTempParent: Function;
  userId?: number;
}) {
  const { commentList, setTempParent, userId } = props;

  return (
    <>
      {commentList &&
        commentList.map((comment: CommentType) => {
          return (
            <div key={comment.commentId}>
              <CommentOrg
                comment={comment}
                setTempParent={setTempParent}
                userId={userId}
              />

              {comment.children !== undefined &&
                comment.children.map((tailComment: CommentType) => {
                  return (
                    <div key={tailComment.commentId}>
                      <CommentListMol
                        commentList={[tailComment]}
                        setTempParent={setTempParent}
                        userId={userId}
                      />
                    </div>
                  );
                })}
            </div>
          );
        })}
    </>
  );
}

export default CommentListMol;
