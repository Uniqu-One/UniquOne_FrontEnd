import styled from "@emotion/styled";
import React from "react";
import { color } from "../../styles/theme";
import UserImgAtm from "../common/atm/UserImgAtm";
import PostTmp from "../common/tmp/PostTmp";

const ReviewCardMolStyle = styled.div`

padding: 12px 18px 0px;
border-bottom: 1px solid ${color.p_gray_lt};
> div{
  :first-of-type{
    /* background-color: red; */
    display: flex;
    justify-content: space-between;
    .left{
      display: flex;
      /* background-color: blue; */
      div{
        
        :first-of-type{
          margin-right: 12px;
          
        }
        :last-of-type{
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          h4{
            font-weight: 500;
          }
          p{
           font-size : 0.875rem;
           :first-of-type{
            color: ${color.p_pruple};
           }
           :last-of-type{
            color: ${color.p_gray_md}
           }
          }
        }
      }
    }
  }
  :last-of-type{
    color: ${color.p_gray_dk};
    margin-top: 12px;
    margin-bottom: 9px;
    font-size: 0.875rem;
    /* background-color: black; */
  }
}
`;

function ReviewCardMol() {
  return (
    <>
      <ReviewCardMolStyle>
        <div>
          <div className="left">
        <UserImgAtm width={54} height={54} />

        <div>
          <h4>userID</h4>
          <p>★★★★★</p>
          <p>2022.09.20</p>
        </div>
        </div>
        <div>
          <PostTmp type="sm" size={54} />
        </div>
        </div>

        <div>리뷰 내용들이 옵니당</div>
      </ReviewCardMolStyle>
    </>
  );
}

export default ReviewCardMol;
