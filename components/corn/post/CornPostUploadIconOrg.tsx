import styled from "@emotion/styled";
import Image from "next/image";
import React, { useRef, useState } from "react";
import useEvaIcon from "../../../lib/hooks/useEvaIcon";
import { color } from "../../../styles/theme";
import CornPostUploadCameraIconAtm from "./CornPostUploadCameraIconAtm";
import CornPostUploadPlusIconAtm from "./CornPostUploadPlusIconAtm";
import CornPostUploadRemoveIconMol from "./CornPostUploadRemoveIconMol";

const CornPostUploadIconOrgStyle = styled.div`
  padding: 12px 0;
  width: 60px;
  height: 60px;
  .dot_box {
    margin: auto;
    border: 3px dashed ${color.p_gray_lt};
    width: 48px;
    height: 48px;
    display: flex;
    .icon {
      margin: auto;
      width: 30px;
      height: 30px;
      position: relative;
    }
  }

  span {
    :last-of-type {
      position: absolute;
      height: 14px;
      width: 14px;
      left: -3px;
      top: 0px;
    }
  }

  .previeImg {
    width: 48px;
    height: 48px;
    position: relative;
  }
`;

function CornPostUploadIconOrg(props: {
  image: Blob | null | File;
  idx: number;

  setImages: Function;
}) {
  useEvaIcon();

  const image = 1;
  const { idx, setImages } = props;
  const [imageSrc, setImgSrc] = useState<string>("");

  // const image = props.image
  const imageInput = useRef<HTMLInputElement>(null);

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

  const handleChangeImage = async (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement;
    if (target.files !== null) {
      setImages((prev: File[] | null[]) => {
        if (target.files !== null) {
          let newImagesList = [...prev];
          newImagesList[idx] = target.files[0];
          return [...newImagesList];
        }
      });

      encodeFileToBase64(target.files[0]);
    }
  };

  const handleClickInput = () => {
    if (imageInput.current !== null) {
      imageInput.current.click();
    }
  };

  const handleRemoveImage = () => {
    //TODO - 정말 삭제하시겠습니까?

    setImgSrc("");
    setImages((prev: File[] | null[]) => {
      let newImageList = [...prev];
      newImageList[idx] = null;
      return [...newImageList];
    });
  };

  return (
    <CornPostUploadIconOrgStyle>
      <div className="dot_box">
        {imageSrc === "" && (
          <div className="icon" onClick={handleClickInput}>
            <CornPostUploadCameraIconAtm />
            <CornPostUploadPlusIconAtm />
            <input
              type="file"
              id="image"
              accept="img/*"
              ref={imageInput}
              onChange={(e) => handleChangeImage(e)}
              style={{ display: "none" }}
            ></input>
          </div>
        )}

        {imageSrc !== "" && (
          <div className="previeImg">
            <Image
              src={imageSrc}
              alt="dummy image"
              // width={100}
              // height={100}
              layout="fill"
            ></Image>

            <div onClick={() => handleRemoveImage()}>
              <CornPostUploadRemoveIconMol />
            </div>
          </div>
        )}
      </div>
    </CornPostUploadIconOrgStyle>
  );
}

export default CornPostUploadIconOrg;
