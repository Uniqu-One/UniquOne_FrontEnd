import styled from "@emotion/styled";
import Image from "next/image";
import React, { useRef, useState } from "react";
import useEvaIcon from "../../../lib/hooks/useEvaIcon";
import { color } from "../../../styles/theme";
import CornPostUploadCameraIconAtm from "./CornPostUploadCameraIconAtm";
import CornPostUploadPlusIconAtm from "./CornPostUploadPlusIconAtm";
import CornPostUploadRemoveIconMol from "./CornPostUploadRemoveIconMol";
import { AnimatePresence, motion } from "framer-motion";
import { useRecoilState, useRecoilValue } from "recoil";
import { CornPostState } from "../../../states/recoil/CornPostState";

export const CornPostUploadIconOrgStyle = styled.div`
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
  setSelectedId: Function;
  setPreViewImg: Function;
}) {
  useEvaIcon();

  const [datas,setDatas] = useRecoilState(CornPostState)

  const { idx, setImages, setSelectedId, setPreViewImg } = props;
  const [imageSrc, setImgSrc] = useState<string>("");
  const imageInput = useRef<HTMLInputElement>(null);

  const encodeFileToBase64 = (fileBlob: Blob) => {
    const reader: any = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve: any) => {
      reader.onload = () => {
        if (reader.result !== null) {
          setImgSrc(reader.result);
          setPreViewImg((prev: string[] | null[]) => {
            let newPreViewList = [...prev];
            newPreViewList[idx] = reader.result;
            return [...newPreViewList];
          });
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

    setImgSrc("");
    setImages((prev: File[] | null[]) => {
      let newImageList = [...prev];
      newImageList[idx] = null;
      return [...newImageList];
    });
    setPreViewImg((prev: string[] | null[]) => {
      let newPreViewImgList = [...prev];
      newPreViewImgList[idx] = "";
      return [...newPreViewImgList];
    });

  };

  return (
    <>
      <CornPostUploadIconOrgStyle>
        <motion.div
          className="dot_box"
          key={String(idx)}
          layoutId={String(idx)}
        >

          {imageSrc === "" && (
            <div className="icon" onClick={handleClickInput}>
              <CornPostUploadCameraIconAtm />
              <CornPostUploadPlusIconAtm />
              <input
                type="file"
                id="image"
                accept="image/*"
                ref={imageInput}
                onChange={(e) => handleChangeImage(e)}
                style={{ display: "none" }}
              ></input>
            </div>
          )}

          {imageSrc !== "" && (
            <motion.div className="previeImg">
              <img  
                onClick={() => setSelectedId(String(idx))}
                src={imageSrc}
                alt="dummy image"
                layout="fill"
              ></Image>

              <div onClick={() => handleRemoveImage()}>
                <CornPostUploadRemoveIconMol />
              </div>
            </motion.div>
          )}
        </motion.div>
      </CornPostUploadIconOrgStyle>
    </>
  );
}

export default CornPostUploadIconOrg;
