import styled from "@emotion/styled";
import React from "react";
import SmBtnAtm from "../common/atm/SmBtnAtm";

const PostSingleDetailBoxStyle = styled.div`
  margin-top: 18px;
  margin-bottom: 12px;
  div {
    margin-right: 6px;
  }
`;

const PostSingleDetailOptStyle = styled.div`
  display: flex;
  margin-bottom: 12px;
  div{
    margin-right: 9px;
  }
  span{
    margin-left: 3px;
    font-weight: 700;
  }
`;

function PostSingleDetailOrg() {
  return (
    <>
      <PostSingleDetailBoxStyle>
        <SmBtnAtm color={"blue"} />
        <SmBtnAtm color={"white"} />
        <SmBtnAtm color={"white"} />
        <SmBtnAtm color={"white"} />
      </PostSingleDetailBoxStyle>
{/* TODO - 아랫 부분 Mol단위로 구분 */}
      <PostSingleDetailOptStyle>
        <div>
          <p>
            사이즈<span>L</span>
          </p>
        </div>

        <div>
          <p>
            상태<span>중고-신품</span>
          </p>
        </div>
        <div>
          <p>
            브랜드<span>마르지엘라</span>
          </p>
        </div>
      </PostSingleDetailOptStyle>
    </>
  );
}

export default PostSingleDetailOrg;
