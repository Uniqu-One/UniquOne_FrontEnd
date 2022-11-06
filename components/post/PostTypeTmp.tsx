import styled from "@emotion/styled";
import React from "react";
import { color } from "../../styles/theme";

// TODO - 온클릭 함수로 팔로잉, 추천 내용 받아서 아래 새로 뿌림
// 해당 내용은 상단 부모 컴포넌트에서 받아옴
// TODO - 컬러 문제 해결해야함

const PostTypeTmpStyle = styled.div<{ type: number }>`
  z-index: 2;
  padding-top: 50px;
  background-color: ${color.p_gray_lt};
  display: flex;
  line-height: 54px;
  padding-left: 21px;
  position: fixed;
  width: 100vw;

  div {
    margin-right: 12px;

    h3 {
      font-weight: 700;
    }
  }

  .following {
    color: ${(props) => props.type === 0 ? color.p_pruple : color.p_gray_dk};
  }

  .rec {
    color: ${(props) => props.type === 1 ? color.p_pruple : color.p_gray_dk};
  }
`;

function PostTypeTmp(props: { tempMenu: number; setTempMenu: Function }) {
  const { tempMenu, setTempMenu } = props;

  return (
    <PostTypeTmpStyle type={tempMenu}>
      <div onClick={() => setTempMenu(0)}>
        <h3 className="following">팔로잉</h3>
      </div>
      <div onClick={() => setTempMenu(1)}>
        <h3 className="rec">추천</h3>
      </div>
    </PostTypeTmpStyle>
  );
}

export default PostTypeTmp;
