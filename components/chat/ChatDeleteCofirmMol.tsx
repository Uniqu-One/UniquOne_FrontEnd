import styled from "@emotion/styled";
import React from "react";
import { useRecoilValue } from "recoil";
import { ChatUtils } from "../../lib/utils/ChatUtils";
import { TokenState } from "../../states/recoil/TokenState";
import { color } from "../../styles/theme";

const ChatDeleteCofirmMolStyle = styled.div`
  border-radius: 18px;
  background-color: white;
  margin: auto 30px;
  margin-top: 35vh;
  color: ${color.p_gray_dk};
  .modalBox {
    margin: auto 24px;
  }

  .inform {
    padding: 24px 0;
    p {
      :first-of-type {
        margin-bottom: 6px;
      }
    }
  }

  .btn {
    display: flex;
    justify-content: space-between;
    padding-bottom: 18px;
    div {
      width: 132px;
      height: 42px;
      line-height: 42px;
      background-color: red;
      text-align: center;
      border-radius: 9px;
    }
    .cancel {
      background-color: white;
      border: 0.5px solid ${color.p_gray_md};
    }
    .out {
      background-color: ${color.p_pruple};
      color: white;
    }
  }
`;

function ChatDeleteCofirmMol(props: {
  setDeleteCofirmModal: Function;
  selectedRoomId?: string;
}) {
  const token = useRecoilValue(TokenState);

  const { setDeleteCofirmModal, selectedRoomId } = props;

  const handleExitChatRoom = async() => {
    if(await ChatUtils.exitChatRoom(token, selectedRoomId)){
      console.log('채팅방 나가기 성공')
    } else {
      console.log('채팅방 나가기 실패')
    }
  };

  return (
    <ChatDeleteCofirmMolStyle>
      <div className="modalBox">
        <div className="inform">
          <p>
            채팅방을 나가면 채팅 목록 및 대화 내용이 삭제되며 복구가
            불가능합니다.
          </p>
          <p>그래도 나가시겠어요?</p>
        </div>
        <div className="btn">
          <div className="cancel" onClick={() => setDeleteCofirmModal(false)}>
            머무르기
          </div>
          <div className="out" onClick={() => handleExitChatRoom()}>
            나가기
          </div>
        </div>
      </div>
    </ChatDeleteCofirmMolStyle>
  );
}

export default ChatDeleteCofirmMol;
