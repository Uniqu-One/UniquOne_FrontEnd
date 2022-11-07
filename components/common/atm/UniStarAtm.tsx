import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import useEvaIcon from "../../../lib/hooks/useEvaIcon";

const StarStyle = styled.i`
  width: 24px;
  height: 24px;
`;

function UniStarAtm(props: { count: null|number }) {
  useEvaIcon();

  switch (props.count) {
    case 1:
      return (
        <StarStyle>
          <img  
            src="/assets/icons/oneStar.svg"
            alt="oneStar"
            width="24px"
            height="24px"
          />
        </StarStyle>
      );

    case 2:
      return (
        <StarStyle>
          <img  
            src="/assets/icons/twoStar.svg"
            alt="twoStar"
            width="24px"
            height="24px"
          />
        </StarStyle>
      );
    case 3:
      return (
        <StarStyle>
          <img  
            src="/assets/icons/threeStar.svg"
            alt="threeStar"
            width="24px"
            height="24px"
          />
        </StarStyle>
      );

    default:
      return (
        <StarStyle>
          <img  
            src="/assets/icons/zeroStar.svg"
            alt="threeStar"
            width="24px"
            height="24px"
          />
        </StarStyle>
      );
  }
}

export default UniStarAtm;
