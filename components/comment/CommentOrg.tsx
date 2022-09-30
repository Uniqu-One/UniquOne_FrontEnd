import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import { color } from "../../styles/theme";

const CommentOrgStyle = styled.div<{type:string}>`
  display: flex;
  justify-content: space-between;
  padding: 12px 18px 9px;
  margin-left: ${(props) => props.type === "head" ? "0px" : "48px"} ;

  img {
    border-radius: 100%;
  }

  > div {
    :first-of-type{
      margin-right: 12px;
    }
    :last-of-type {
      width: ${(props) => props.type === "head" ? "calc(100vw - 96px)" : "calc(100vw - 146px)"}
    }
  }
`;
const CommentUserStyle = styled.div`
  line-height: 1.1rem;
  font-size: 0.875rem;
  margin-bottom: 6px;
  span {
    font-weight: 700;
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

function CommentOrg(props: { type: string }) {
  return (
    <CommentOrgStyle type={props.type}>
      <div>
        <Image
          src="/assets/images/dummyUserImg.jpg"
          alt="user dummy"
          width="48px"
          height="48px"
        />
      </div>
      <div>
        <CommentUserStyle>
          <p>
            <span>userId</span>댓글의 내용이 여기에 옵니다. 댓글의 내용이
            길어진다면 조금 더 좋을텐데 그렇지 않나요?fdasfsdfsdfasfsda
          </p>
        </CommentUserStyle>
        <CommentAncorStyle>
          <p>N시간 전</p>
          <p>답글달기</p>
        </CommentAncorStyle>
      </div>
    </CommentOrgStyle>
  );
}

export default CommentOrg;