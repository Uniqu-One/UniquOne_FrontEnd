import styled from "@emotion/styled";
import React from "react";
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
    line-height: 54px;
    font-size: 0.875rem;
    margin-left:6px;
    margin-right: 3px;
  }
`;

function PostUserMol(props: { userName: string }) {
  return (
    <>
      <PostUserMolStyle>
        <UserImgAtm width={42} height={42} />
        <p>{props.userName}</p>
        <GradeIconAtm width={20} heigth={20} />
      </PostUserMolStyle>
    </>
  );
}

export default PostUserMol;
