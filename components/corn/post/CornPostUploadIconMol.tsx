import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { CornPostState } from "../../../states/recoil/CornPostState";
import { color } from "../../../styles/theme";
import CornPostEditImgIconMol from "./CornPostEditImgIconMol";
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
  const router = useRouter();
  const [postData, setPostData] = useRecoilState(CornPostState);
  const [images, setImages] = useState([null, null, null, null, null]);
  const [preViewImg, setPreViewImg] = useState<string[]>(["", "", "", "", ""]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  useEffect(() => {
    
      setPostData((prev) => ({ ...prev, imgList: [...images] }));

  }, [images]);



  return (
    <>
      <CornPostUploadIconMolStyle>
        {!router.query.postId && (
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
        ) }
        
        {router.query.postId && postData.imgList[0] &&  (
          <div className="upload_img">
            {postData.imgList.map((image, idx) => 
              { 
                return <CornPostEditImgIconMol
                key={idx}
                // @ts-ignore
                image={image}
                idx={idx}
                setSelectedId={setSelectedId}
              />}
            )}
          </div>
        )}

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
                // @ts-ignore
                  src={!router.query.postId ? preViewImg[+selectedId] : postData.imgList[+selectedId]}
                  alt="testImg"
                  width={600}
                  height={600}
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>

            

        {!router.query.postId ? (
          <div className="upload_desc">
            <p>여러분의 스타일 사진을 업로드해주세요!</p>
          </div>
        ) : (
          <div className="upload_desc">
            <p>업로드된 사진은 수정 불가능합니다.</p>
          </div>
        )}
      </CornPostUploadIconMolStyle>
    </>
  );
}

export default CornPostUploadIconMol;
