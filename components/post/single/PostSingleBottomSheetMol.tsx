import styled from "@emotion/styled";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { color } from "../../../styles/theme";
import BtnTmp from "../../common/tmp/BtnTmp";
import PostBottomCompleteMol from "../sheet/PostBottomCompleteMol";
import PostBottomOfferMol from "../sheet/PostBottomOfferMol";

const PostSingleBottomSheetMolStyle = styled.div`

  height: 76vh;

`;

function PostSingleBottomSheetMol() {
  
  const [complete, setComplete] = useState(false);



  return (
    <PostSingleBottomSheetMolStyle>
      {complete ? (
        <PostBottomCompleteMol/>
      ) : (
        <PostBottomOfferMol setComplete={setComplete}/>
      )}
    </PostSingleBottomSheetMolStyle>
  );
}

export default PostSingleBottomSheetMol;
