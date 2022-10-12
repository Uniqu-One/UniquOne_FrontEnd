import styled from "@emotion/styled";
import React from "react";
import useEvaIcon from "../../lib/hooks/useEvaIcon";
import { color } from "../../styles/theme";

const PostHeartFillAtmStyle = styled.div`
  fill: ${color.p_red};
`

function PostHeartFillAtm() {
  useEvaIcon();
  return (
    <PostHeartFillAtmStyle>
      <i data-eva="heart"></i>
    </PostHeartFillAtmStyle>
  );
}

export default PostHeartFillAtm;
