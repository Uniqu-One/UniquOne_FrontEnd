import styled from '@emotion/styled'
import Image from 'next/image'
import React from 'react'
import { color } from '../../styles/theme'

const ChatRoomItemBoxStyle = styled.div`
  padding: 0 18px;
  height: 66px;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid ${color.p_gray_lt};
  font-size: 0.875rem;

  img{
    border-radius: 9px;
  }
  .left{
    margin: auto 0;
    display: flex;

    .text{
      margin: auto 0 ;
      margin-left: 6px;
      color: ${color.p_gray_dk};
      font-weight: 550;

      display: flex;
      flex-direction: column;
      h4{
        margin: 1.5px 0px;
      }
      span{
        color: ${color.p_gray_md};
        font-weight: 450;
      }
    }
    
  }
`

function ChatRoomItemBox() {
  return (
    <>
    <ChatRoomItemBoxStyle>
      <div className='left'>
        <div>
          <Image src="/assets/images/postImage.jpg" alt="dummy image" width={42} height={42}/>
        </div>
        <div className='text'>
          <h4>에스테틱 골저러스 페브라스</h4>
          <h4>27,000원<span>(오퍼가능)</span></h4>
        </div>

      </div>

      <div>
        개쩌는 버튼
      </div>
    </ChatRoomItemBoxStyle>
    </>
  )
}

export default ChatRoomItemBox