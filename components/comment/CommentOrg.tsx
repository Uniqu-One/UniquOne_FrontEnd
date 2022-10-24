import styled from "@emotion/styled";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { color } from "../../styles/theme";
import { CommentType } from "./CommentTmp";

const CommentOrgStyle = styled.div<{ type: string; mine: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 12px 18px 9px;
  margin-left: ${(props) => (props.type === "head" ? "0px" : "48px")};
  img {
    border-radius: 100%;
  }

  .img_circle {
    border: 1px solid
      ${(props) => {
        return props.mine ? color.p_pruple : color.p_gray_lt;
      }};
    border-radius: 100%;
  }

  > div {
    :first-of-type {
      margin-right: 12px;
    }
    :last-of-type {
      width: ${(props) =>
        props.type === "head" ? "calc(100vw - 96px)" : "calc(100vw - 146px)"};
    }
  }
`;
const CommentUserStyle = styled.div`
  line-height: 1.1rem;
  font-size: 0.875rem;
  margin-bottom: 6px;

  .head {
    font-weight: 700;
    margin-right: 6px;
  }
  .tail {
    color: ${color.p_pruple};
    margin-right: 6px;
  }
`;
const CommentAncorStyle = styled.div`
  display: flex;
  p {
    font-size: 0.75rem;
    :first-of-type {
      color: ${color.p_gray_md};
      margin-right: 9px;
    }
    :last-of-type {
      color: ${color.p_gray_dk};
      font-weight: 700;
    }
  }
`;

function CommentOrg(props: {
  comment: CommentType;
  setTempParent: Function;
  userId?: number;
}) {
  const {
    parentId,
    content,
    writerNick,
    regDate,
    commentId,
    children,
    cornImgUrl,
    parentNickname,
    userId,
  } = props.comment;
  const { setTempParent } = props;
  const userIdAtom = props.userId;

  const handleChangeTempParent = () => {
    setTempParent(commentId);
  };


  return (
    <CommentOrgStyle
      type={parentId ? "tail" : "head"}
      mine={
        userIdAtom !== undefined && userIdAtom === props.comment.userId
          ? true
          : false
      }
    >
      <div className="img_circle">
        <Image
          src={cornImgUrl ? cornImgUrl : "/assets/images/dummyUserImg.jpg"}
          alt="user dummy"
          width="48px"
          height="48px"
        />
      </div>
      <div>
        <CommentUserStyle>
          <p>
            <span className="head">{writerNick}</span>
            <span className="tail">
              {parentNickname && "@" + parentNickname}
            </span>
            {content}
          </p>
        </CommentUserStyle>
        <CommentAncorStyle>
          <p>{regDate}시간 전 </p>
          <p onClick={() => handleChangeTempParent()}>답글달기</p>
        </CommentAncorStyle>
      </div>
    </CommentOrgStyle>
  );
}

export default CommentOrg;
