import styled from "@emotion/styled";
import React from "react";
import useEvaIcon from "../../../lib/hooks/useEvaIcon";
import { color } from "../../../styles/theme";

const CornPostUploadRemoveIconMolStyle = styled.div`
  fill: ${color.p_red};
  position: absolute;
  right: -6px;
  top: -6px;
  svg {
    width: 18px;
    height: 18px;
  }
`;

function CornPostUploadRemoveIconMol() {
  useEvaIcon();
  return (
    <CornPostUploadRemoveIconMolStyle>
      <i data-eva="minus-circle"></i>
      
    </CornPostUploadRemoveIconMolStyle>
  );
}

export default CornPostUploadRemoveIconMol;
