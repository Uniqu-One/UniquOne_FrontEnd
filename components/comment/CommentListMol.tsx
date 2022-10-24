import React from 'react'
import CommentOrg from './CommentOrg';
import { CommentType } from './CommentTmp';

function CommentListMol(props:{commentList:CommentType[], setTempParent:Function}) {

  const {commentList, setTempParent} = props
// commentList={commentList} setTempParent={setTempParent}

  return (
    <>
          {commentList &&
        commentList.map((comment: CommentType) => {
          return (
            <div key={comment.commentId}>
              <CommentOrg comment={comment} setTempParent={setTempParent} />

              {comment.children !== undefined &&
                comment.children.map((tailComment: CommentType) => {
                  return (
                    <div key={tailComment.commentId}>
                    <CommentListMol
                      commentList={[tailComment]}
                      setTempParent={setTempParent}
                    />
                    </div>
                  )
                })}
            </div>
          );
        })}
    </>
  )
}

export default CommentListMol