import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React from "react";
import { Puff } from "react-loader-spinner";
import { color } from "../../../styles/theme";

const OAuthRedirectTmpStyle = styled.div`
  text-align: center;
  div{
    justify-content: center;
    margin-top: 24vh;
  }
  p{
    margin-top: 24px;
    font-size: 0.875rem;
    color: ${color.p_gray_md};
  }
`;

function OAuthRedirectTmp() {
  return (
    <>
      <OAuthRedirectTmpStyle>
        <div>
          <Puff
            height="120"
            width="120"
            color={color.p_pruple}
            ariaLabel="puff-loading"
            radius={1}
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
        <p>로그인이 진행중입니다 :{")"}</p>
      </OAuthRedirectTmpStyle>
    </>
  );
}

export default OAuthRedirectTmp;
