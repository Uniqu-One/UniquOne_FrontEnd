import styled from "@emotion/styled";
import React from "react";
import { color } from "../../../styles/theme";
import PostSingleFooterChatMol from "./PostSingleFooterChatMol";
import PostSingleFooterOfferMol from "./PostSingleFooterOfferMol";

const PostSingleFooterTmpStyle = styled.div`
  height: 60px;
  background-color: white;
  position: fixed;
  bottom: 0;
  width: 100vw;
  text-align: center;
  display: flex;
  justify-content: space-between;
  border-top: 0.5px solid ${color.p_gray_md};
  font-weight: 600;

  .btns {
    margin: auto 0;
    margin-right: 24px;
    display: flex;

    .offer {
      background-color: ${color.p_pruple};
      border: 0.5px solid ${color.p_gray_md};
      color: white;
    }

    .chat {
      background-color: white;
      border: 0.5px solid ${color.p_gray_md};
      color: ${color.p_gray_dk};
    }

    p {
      padding: 12px 18px;
      border-radius: 9px;
      margin-left: 12px;
    }
  }

  .price {
    color: ${color.p_gray_dk};
    margin: auto 0;
    margin-left: 24px;
  }
`;

function PostSingleFooterTmp() {
  return (
    <>
      <PostSingleFooterTmpStyle>
        <div className="price">142,000원</div>

        <div className="btns">
          <PostSingleFooterOfferMol />
          <PostSingleFooterChatMol />
        </div>
      </PostSingleFooterTmpStyle>
    </>
  );
}

export default PostSingleFooterTmp;
