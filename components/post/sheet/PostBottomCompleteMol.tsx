import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import { color } from "../../../styles/theme";
import BtnTmp from "../../common/tmp/BtnTmp";

const PostBottomCompleteMolStyle = styled.div`
  text-align: center;

  h3{
    font-size: 1.4rem;
    font-weight: 600;
    color: ${color.p_pruple};
    margin-top: 24px;
    margin-bottom: 12px;
  }
  > p{
    font-size: 0.875rem;
    color: ${color.p_gray_dk};
  }
`;

function PostBottomCompleteMol() {
  return (
    <PostBottomCompleteMolStyle>
      <h3>제안을 전송하였습니다!</h3>
      <p>셀러가 제안을 볼 수 있도록 전달해드렸어요!</p>
      <Image
        src="/assets/images/congImage.png"
        alt="happy corn"
        width={240}
        height={240}
      />
      <BtnTmp size="lg" value="내 가격 제안 보기" status={true}/>
    </PostBottomCompleteMolStyle>
  );
}

export default PostBottomCompleteMol;
