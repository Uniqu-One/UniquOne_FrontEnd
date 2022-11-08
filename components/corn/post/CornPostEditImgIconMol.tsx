import React from "react";
import { CornPostUploadIconOrgStyle } from "./CornPostUploadIconOrg";
import { motion } from "framer-motion";

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
              <img  
                onClick={() => setSelectedId(String(idx))}
                // @ts-ignore
                src={image}
                width="54px"
                height="54px"
                // layout="fill"
              />
            </motion.div>
          
        </motion.div>
      </CornPostUploadIconOrgStyle>
    </>
  );
}

export default CornPostEditImgIconMol;
