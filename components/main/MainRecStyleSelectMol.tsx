import styled from "@emotion/styled";
import React from "react";
import { color } from "../../styles/theme";

const MainRecStyleSelectMolStyle = styled.div`
  border-radius: 9px;
  margin: 0px 18px 0px;
  height: 168px;
  
  background-color: white;
  

  display: flex;
  justify-content: center;

  div {
    margin: auto 6px;
    img {
      border-radius: 9px;
    }
  }

  h3 {
    
    line-height: 1.6rem;
    text-align: center;
    width: 186px;
    font-weight: 700;
    background: linear-gradient(
      113.7deg,
      #e2b0f3 -14.74%,
      #e277de 44.02%,
      #79bbf9 98.08%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: auto 6px auto 0px;
    font-size: 1.2rem;
  }
`;

function MainRecStyleSelectMol(props:{userNickName:string}) {
  return (
    <>
      <MainRecStyleSelectMolStyle>
        <div className="back">
          <img
            src="https://uniquoneimg.s3.ap-northeast-2.amazonaws.com/img/909c97ac-5f4c-4fbd-8e84-9c6442d2da5fhome14292324-64b7-4bd7-b527-ff38c53186fb.jpg"
            alt="더미 이미지"
            width="134px"
            height="134px"
          />
        </div>
        <h3>
          {props.userNickName}님께서 
          <br/>
          선택한 포스트들을 바탕으로스타일을 추천해드려요!
        </h3>
      </MainRecStyleSelectMolStyle>
    </>
  );
}

export default MainRecStyleSelectMol;
