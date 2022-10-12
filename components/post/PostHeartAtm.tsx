import styled from "@emotion/styled";
import React from "react";
import useEvaIcon from "../../lib/hooks/useEvaIcon";
import { color } from "../../styles/theme";

const PostHeartAtmStyle = styled.div`
  fill: ${color.p_gray_dk};
`;

function PostHeartAtm() {
  useEvaIcon();

  return (
    <PostHeartAtmStyle>
      <i data-eva="heart-outline"></i>
    </PostHeartAtmStyle>
  );
}

export default PostHeartAtm;
