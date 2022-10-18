import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { CornPostState } from "../../../states/recoil/CornPostState";
import { color } from "../../../styles/theme";
import CornPostUploadIconOrg from "./CornPostUploadIconOrg";

const CornPostUploadIconMolStyle = styled.div`
  margin-top: 12px;

  .upload_img {
    display: flex;
    justify-content: space-between;
  }

  .upload_desc {
    text-align: center;
    font-size: 0.8rem;
    color: ${color.p_gray_md};
    margin-bottom: 18px;
  }
  .max_img_container {
    position: fixed;
    width: 100vw;
    z-index: 30;
    left: 0;
  }

  .back_shadow {
    width: 100vw;
    height: 100vh;
    background-color: black;
    opacity: 50%;
    bottom: 0;
    left: 0;
    z-index: 20;
    position: absolute;
  }
`;

function CornPostUploadIconMol() {
  const [postData, setPostData] = useRecoilState(CornPostState);
  const [images, setImages] = useState([null, null, null, null, null]);
  const [preViewImg, setPreViewImg] = useState<string[]>(["", "", "", "", ""]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    setPostData((prev) => ({ ...prev, imgList: [...images] }));
  }, [images]);

  return (
    <>
      {/* {selectedId && <div className="back_shadow">hi</div>} */}

      <CornPostUploadIconMolStyle>
        <div className="upload_img">
          {images.map((image, idx) => (
            <CornPostUploadIconOrg
              key={idx}
              image={image}
              idx={idx}
              setImages={setImages}
              setSelectedId={setSelectedId}
              setPreViewImg={setPreViewImg}
            />
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <>
              <motion.div
                onClick={() => setSelectedId(null)}
                className="back_shadow"
                transition={{ duration: 0.1 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                exit={{ opacity: 0 }}
              ></motion.div>
              <motion.div
                className="max_img_container"
                layoutId={selectedId}
                onClick={() => setSelectedId(null)}
              >
                <Image
                  src={preViewImg[+selectedId]}
                  alt="testImg"
                  width={600}
                  height={600}
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <div className="upload_desc">
          <p>여러분의 스타일 사진을 업로드해주세요!</p>
        </div>
      </CornPostUploadIconMolStyle>
    </>
  );
}

export default CornPostUploadIconMol;
