import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { CornPostState } from "../../../states/recoil/CornPostState";
import { color } from "../../../styles/theme";
import CornPostUploadIconOrg from "./CornPostUploadIconOrg";

const CornPostUploadIconMolStyle = styled.div`
  margin-top: 12px;

  .upload_img{
    display: flex;
    justify-content: space-between;
  }

  .upload_desc {
    text-align: center;
    font-size: 0.8rem;
    color: ${color.p_gray_md};
    margin-bottom: 18px;
  }
`;

function CornPostUploadIconMol() {
  const [postData, setPostData] = useRecoilState(CornPostState);
  const [images, setImages] = useState([null, null, null, null, null]);

  useEffect(() => {
    setPostData((prev) => ({ ...prev, imgList: [...images] }));
  }, [images]);

  return (
    <>
      <CornPostUploadIconMolStyle>
        <div className="upload_img">
          {images.map((image, idx) => (
            <CornPostUploadIconOrg
              key={idx}
              image={image}
              idx={idx}
              setImages={setImages}
            />
          ))}
        </div>

        <div className="upload_desc">
          <p>여러분의 스타일 사진을 업로드해주세요!</p>
        </div>
      </CornPostUploadIconMolStyle>
    </>
  );
}

export default CornPostUploadIconMol;
