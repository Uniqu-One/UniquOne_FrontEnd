import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import { color } from "../../../styles/theme";

const UploadedImgAtmStyle = styled.div`
  position: relative;
  text-align: center;
  width: 120px;
  height: 120px;
  margin: 24px auto;
  border-radius: 100%;
  border: 1px solid ${color.p_gray_dk};
  overflow: hidden;
  
`;

function UploadedImgAtm(props: { imgSrc: string }) {
  return (
    <>
      <UploadedImgAtmStyle>
        <div>
          <img   src={props.imgSrc} alt="미리보기" 
          // layout="fill" objectFit="cover"
          width="100%"
          height="100%"
          />
        </div>
      </UploadedImgAtmStyle>
    </>
  );
}

export default UploadedImgAtm;
