import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import { color } from "../../styles/theme";

const MainRecUserCardStyle = styled.div`
  position: relative;
  width: 150px;
  height: 216px;
  background-color: ${color.p_gray_md};
  border-radius: 9px;

  div{
    position: absolute;
    bottom: 12px;
    left: 12px;
  }
`;

const MainRecUserInfoStyle = styled.div`
  display: flex;
  img{
    border-radius: 100%;
  }
  p{
    color: white;
    margin: auto 0 auto 3px;
    
  }
`

function MainRecUserCardMol() {
  return (
    <>
      <MainRecUserCardStyle>
        <MainRecUserInfoStyle>
          <Image src="/assets/images/dummyUserImg.jpg" alt="유저 이미지" width={30} height={30}/>
          <p>userName</p>
        </MainRecUserInfoStyle>
      </MainRecUserCardStyle>
    </>
  );
}

export default MainRecUserCardMol;
