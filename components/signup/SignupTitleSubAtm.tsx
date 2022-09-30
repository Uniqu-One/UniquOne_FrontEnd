import styled from "@emotion/styled";
import React from "react";
import useEvaIcon from "../../lib/hooks/useEvaIcon";
import { color } from "../../styles/theme";

const SignupTitleSubBox = styled.div`
  margin-left: 18px;
  margin-right: 18px;
  margin-top: 24px;
  h2 {
    margin-bottom: 12px;
  }
  p {
    margin-bottom: 3px;
  }

  .ImgUpload {
    
    width: 120px;
    height: 120px;
    border-radius: 100%;
    border: 3px dashed ${color.p_gray_md};
    /* background-color: lightblue; */
    margin: 38px auto !important;
    text-align: center;
    div{
      height: 120px;
      line-height: 136px;
      margin: auto !important;
      position: relative;
      display: inline-block;
      /* background-color: peachpuff; */
      span{
        :first-of-type{
          /* background-color: red; */
        }
        :last-of-type{
          
          position: absolute;
          left: -3px;
          /* background-color: black; */
        }
      }
    }
  }
`;

const SignupTitleStyle = styled.h2`
  font-size: 1rem;
  color: ${color.p_pruple};
  font-weight: 700;
`;
const SignupSubeStyle = styled.p`
  font-size: 0.875rem;
  color: ${color.p_gray_dk};
  span {
    color: ${color.p_pruple};
  }
`;

function SignupTitleSubAtm(props: { type?: string }) {
  useEvaIcon();

  switch (props.type) {
    case "reg-1":
      return (
        <>
          <SignupTitleSubBox>
            <SignupTitleStyle>나의 Corn의 이름을 정해주세요!</SignupTitleStyle>
            <br />
            <SignupSubeStyle>
              당신의 스타일을 포스트할 Corn의 이름을 정해주세요!
            </SignupSubeStyle>
            <br />
            <SignupSubeStyle>
              만약 이름 생성이 어렵다면 자동생성 버튼을 눌러
            </SignupSubeStyle>
            <SignupSubeStyle>다음 단계를 진행해주세요!</SignupSubeStyle>
          </SignupTitleSubBox>
        </>
      );

    case "reg-2":
      return (
        <>
          <SignupTitleSubBox>
            <SignupTitleStyle>나의 Corn을 소개해주세요!</SignupTitleStyle>
            <br />
            <SignupSubeStyle>정말 멋진 Corn 이름이네요!</SignupSubeStyle>
            <br />
            <SignupSubeStyle>
              지금부터는 나의 Corn을 소개할 내용을 입력해주세요!
            </SignupSubeStyle>
            <SignupSubeStyle>
              작성한 내용은 나중에 자유롭게 수정가능해요!
            </SignupSubeStyle>
          </SignupTitleSubBox>
        </>
      );

    case "reg-3":
      return (
        <>
          <SignupTitleSubBox>
            <SignupTitleStyle>
              마지막으로 Corn을 잘 나타낼 수 있는 사진을 선택해주세요!
            </SignupTitleStyle>
            <div className="ImgUpload">
              <div>
                <span className="camera">
                  <i
                    data-eva="camera-outline"
                    data-eva-fill={color.p_gray_dk}
                    data-eva-height="30px"
                    data-eva-width="30px"
                  ></i>
                </span>
                <span className="plus">
                  <i
                    data-eva="plus-circle"
                    data-eva-fill={color.p_pruple}
                    data-eva-height="14px"
                    data-eva-width="14px"
                  ></i>
                </span>
              </div>
            </div>
            <SignupSubeStyle>
              사진을 통해 다른 유저가
            </SignupSubeStyle>
            <SignupSubeStyle>
              내 콘을 기억할 수 있게 만들어 주세요!
            </SignupSubeStyle>
            <br />
            <SignupSubeStyle>선택을 하지 않는다면</SignupSubeStyle>
            <SignupSubeStyle>
              유니크원이 랜덤한 사진으로 프로필을 꾸며드릴게요!
            </SignupSubeStyle>
          </SignupTitleSubBox>
        </>
      );

    default:
      return (
        <>
          <SignupTitleSubBox>
            <SignupTitleStyle>이메일로 시작하기</SignupTitleStyle>
            <SignupSubeStyle>당신의 이메일은 무엇인가요?</SignupSubeStyle>
            <SignupSubeStyle>
              <span>UniquOne</span>에서는 이메일이 곧 아이디입니다 :{")"}
            </SignupSubeStyle>
          </SignupTitleSubBox>
        </>
      );
  }
}

export default SignupTitleSubAtm;
