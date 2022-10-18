import styled from "@emotion/styled";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { color } from "../../../styles/theme";

const CornImgChangeMolStyle = styled.div`
  text-align: center;
  padding-top: 50px;
  img {
    border-radius: 100%;
  }

  div {
    margin-top: 18px;

    :last-of-type {
      margin-bottom: 18px;
      font-size: 0.875rem;
      color: ${color.p_pruple};
    }
  }
`;

// TODO - any 치트키 변경하기

function CornImgChangeMol(props: {
  cornImg: string;
  setCornProfile: Function;
}) {
  const photoInput = useRef<HTMLInputElement>(null);

  const handleClickInput = () => {
    if (photoInput.current !== null) {
      photoInput.current.click();
    }
  };

  const [imageSrc, setImgSrc] = useState<string>("");

  const encodeFileToBase64 = (fileBlob: Blob) => {
    const reader: any = new FileReader();

    reader.readAsDataURL(fileBlob);

    return new Promise((resolve: any) => {
      reader.onload = () => {
        if (reader.result !== null) {
          setImgSrc(reader.result);

          resolve();
        }
      };
    });
  };

  const handleChangeImg = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement;

    if (target.files !== null) {
      encodeFileToBase64(target.files[0]);
      //TODO - 타입 지정 변경해아함
      //TODO - 여기서 img 파일이 파일리스트로 들어가니 주의
      props.setCornProfile((prev: any) => {
        if (target.files !== null) {
          ({ ...prev, img: target.files[0] });
        }
      });
    }
  };

  useEffect(() => {
    setImgSrc(props.cornImg);
  }, []);

  return (
    <CornImgChangeMolStyle>
      <div>
        <Image
          src={imageSrc ? imageSrc : "/assets/images/dummyUserImg.jpg"}
          alt="더미 유저"
          width={120}
          height={120}
        />
      </div>
      <div>
        <input
          type="file"
          accept="image/jpg, image/jpeg, image/png"
          multiple
          style={{ display: "none" }}
          ref={photoInput}
          onChange={(e) => handleChangeImg(e)}
        />
        <p onClick={handleClickInput}>콘 사진 변경</p>
      </div>
    </CornImgChangeMolStyle>
  );
}

export default CornImgChangeMol;
