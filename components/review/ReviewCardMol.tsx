import styled from "@emotion/styled";
import React from "react";
import { reviewListType } from "../../lib/utils/ReviewUtils";
import { color } from "../../styles/theme";
import UserImgAtm from "../common/atm/UserImgAtm";
import PostTmp from "../common/tmp/PostTmp";

const ReviewCardMolStyle = styled.div`
  padding: 12px 18px 0px;
  border-bottom: 1px solid ${color.p_gray_lt};
  > div {
    :first-of-type {
      display: flex;
      justify-content: space-between;
      .left {
        display: flex;
        div {
          :first-of-type {
            margin-right: 12px;
          }
          :last-of-type {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            h4 {
              font-weight: 500;
            }
            p {
              font-size: 0.875rem;
              :first-of-type {
                color: ${color.p_pruple};
              }
              :last-of-type {
                color: ${color.p_gray_md};
              }
            }
          }
        }
      }
    }
    :last-of-type {
      color: ${color.p_gray_dk};
      margin-top: 12px;
      margin-bottom: 9px;
      font-size: 0.875rem;
      /* background-color: black; */
    }
  }

  .item_img {
    border: 1px solid ${color.p_gray_lt};
    border-radius: 9px;
  }
`;

function ReviewCardMol(props: { review: reviewListType }) {
  const {
    cornImg,
    dsc,
    postId,
    postImg,
    reviewId,
    reviewRegDate,
    star,
    userId,
    userNickName,
  } = props.review;

  console.log(cornImg);

  return (
    <>
      <ReviewCardMolStyle>
        <div>
          <div className="left">
            <UserImgAtm width={54} height={54} url={cornImg} />

            <div>
              <h4>{userNickName}</h4>
              <p>★★★★★</p>
              <p>{reviewRegDate}</p>
            </div>
          </div>
          <div className="item_img">
            <PostTmp type="sm" size={54} imgUrl={postImg } />
          </div>
        </div>

        <div>{dsc}</div>
      </ReviewCardMolStyle>
    </>
  );
}

export default ReviewCardMol;
