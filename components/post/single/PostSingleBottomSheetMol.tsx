import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { color } from "../../../styles/theme";
import BtnTmp from "../../common/tmp/BtnTmp";
import PostBottomCompleteMol from "../sheet/PostBottomCompleteMol";
import PostBottomOfferMol from "../sheet/PostBottomOfferMol";

const PostSingleBottomSheetMolStyle = styled.div`

  height: 76vh;

`;

function PostSingleBottomSheetMol(props:{postData?:{}}) {
  
  const [complete, setComplete] = useState(false);


  return (
    <PostSingleBottomSheetMolStyle>
      {complete ? (
        <PostBottomCompleteMol/>
      ) : (
        //@ts-ignore
        <PostBottomOfferMol setComplete={setComplete} postData={props.postData}/>
      )}
    </PostSingleBottomSheetMolStyle>
  );
}

export default PostSingleBottomSheetMol;
