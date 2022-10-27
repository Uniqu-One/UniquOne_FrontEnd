import styled from "@emotion/styled";
import React, { InputHTMLAttributes, useRef, useState } from "react";
import useEvaIcon from "../../lib/hooks/useEvaIcon";
import { color } from "../../styles/theme";
import ImgUploadIconAtm from "../common/atm/ImgUploadIconAtm";
import UploadedImgAtm from "../common/atm/UploadedImgAtm";

const SignupTitleSubBox = styled.div`
  margin-left: 18px;
  margin-right: 18px;
  padding-top: 72px;
  h2 {
    margin-bottom: 12px;
  }
  p {
    margin-bottom: 3px;
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

function SignupTitleSubAtm(props: { type?: string; setImgFile?: Function }) {
  useEvaIcon();
  const [imgFile, setImgFile] = useState<string | null>(null);

  const encodeFileToBase64 = (fileBlob: Blob) => {
    const reader: any = new FileReader();

    reader.readAsDataURL(fileBlob);

    return new Promise((resolve: any) => {
      reader.onload = () => {
        if (reader.result !== null) {
          setImgFile(reader.result);

          resolve();
        }
      };
    });
  };

  const onLoadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;

    if (props.setImgFile) {
      if (file) {
        encodeFileToBase64(file[0]);
        props.setImgFile(file[0]);
      }
    }
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const handleClickImgUploadIcon = () => {
    inputRef?.current?.click();
  };

  console.log(imgFile);

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

            {inputRef?.current?.value && imgFile ? (
              <div
                onClick={() => {
                  handleClickImgUploadIcon();
                }}
              >
                <UploadedImgAtm imgSrc={imgFile} />
              </div>
            ) : (
              <div
                onClick={() => {
                  handleClickImgUploadIcon();
                }}
              >
                <ImgUploadIconAtm />
              </div>
            )}

            <div style={{ display: "none" }}>
              <input
                ref={inputRef}
                type="file"
                id="image"
                accept="img/*"
                onChange={onLoadFile}
              ></input>
            </div>

            <SignupSubeStyle>사진을 통해 다른 유저가</SignupSubeStyle>
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
