import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import PostTmp from "../common/tmp/PostTmp";
import MyStyleSelectContentMol from "./MyStyleSelectContentMol";

const MyStyleSelectTmpStyle = styled.div`
  text-align: center;
  margin-top: 12px;
  margin-bottom: 12px;
`

function MyStyleSelectTmp() {
  return (
    <><MyStyleSelectTmpStyle>
      <div>
      <Image
        src="/assets/images/styleSelectImg.png"
        alt="style select corn"
        width={200}
        height={200}
      />
      </div>
      <div>
        <p>마음에 드는 사진을 선택해주세요!</p>
        <br></br>
        <p>아래의 선택된 사진들을 바탕으로</p>
        <p>회원님이 선호할만한 포스트들을 추천해드릴게요 :{")"}</p>
      </div>
      </MyStyleSelectTmpStyle>
      
      <MyStyleSelectContentMol/>
    </>
  );
}

export default MyStyleSelectTmp;
