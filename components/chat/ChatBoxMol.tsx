import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React from "react";
import { color } from "../../styles/theme";
import UserImgAtm from "../common/atm/UserImgAtm";
import PostTmp from "../common/tmp/PostTmp";

const ChatBoxMolStyle = styled.div`

padding: 12px 18px 0px;
border-bottom: 1px solid ${color.p_gray_lt};
> div{
  :first-of-type{
    display: flex;
    justify-content: space-between;
    .left{
      display: flex;
      
      div{
        
        :first-of-type{
          margin-right: 12px;
        }
        :last-of-type{
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin: 6px 0px;
          h4{
            font-weight: 500;
            span{
              margin-left: 3px;
              font-weight: 400;
              color: ${color.p_gray_md};
            }
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
    margin-bottom: 9px;
    font-size: 0.875rem;
    /* background-color: black; */
  }

  .ItemBox{
    margin: auto 0;
  }
}
`;

function ChatBoxMol() {

const router = useRouter()

  const handleEnterRoom =() => {
    router.push("/chat/1")
  }

  return (
    <>
      <ChatBoxMolStyle>
        
        <div onClick={() => handleEnterRoom()}>
          <div className="left">
        <UserImgAtm width={54} height={54} />

        <div>
          <h4>userID<span>28분전</span></h4>
          <p>내용인디</p>
        </div>
        </div>
        <div className="ItemBox">
          <PostTmp type="sm" size={48} />
        </div>
        </div>

      </ChatBoxMolStyle>
    </>
  );
}

export default ChatBoxMol;
