import styled from "@emotion/styled";
import React from "react";
import { color } from "../../styles/theme";
import GradeIconAtm from "../common/atm/GradeIconAtm";
import UserImgAtm from "../common/atm/UserImgAtm";

const PostUserMolStyle = styled.div`
  display: inline-block;
  margin: auto 0 ;
  height: 54px;
  /* background-color: gray; */
  display: flex;
  > div {
    margin: auto 0;
  }
  p {
    color: ${color.p_gray_dk};
    line-height: 54px;
    font-size: 0.875rem;
    margin-left:6px;
    margin-right: 3px;
  }
`;

function PostUserMol(props: { userName: string,cornImg:string }) {
  return (
    <>
      <PostUserMolStyle>
        <UserImgAtm width={42} height={42} url={props.cornImg}/>
        <p>{props.userName}</p>
      </PostUserMolStyle>
    </>
  );
}

export default PostUserMol;
