import React from "react";
import { CornPostUploadIconOrgStyle } from "./CornPostUploadIconOrg";
import { motion } from "framer-motion";
import Image from "next/image";

function CornPostEditImgIconMol(props: {
  image: String | null;
  idx: number;
  setSelectedId: Function;
}) {
  const { idx, setSelectedId,image } = props;

  return (
    <>
      <CornPostUploadIconOrgStyle>
        <motion.div
          className="dot_box"
          key={String(idx)}
          layoutId={String(idx)}
        >


          
            <motion.div className="previeImg">
              <Image loading="lazy"
                onClick={() => setSelectedId(String(idx))}
                // @ts-ignore
                src={image}
                alt="dummy image"
                layout="fill"
              ></Image>
            </motion.div>
          
        </motion.div>
      </CornPostUploadIconOrgStyle>
    </>
  );
}

export default CornPostEditImgIconMol;
