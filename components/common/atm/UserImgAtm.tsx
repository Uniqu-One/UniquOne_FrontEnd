import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";

const UserImgAtmStyle = styled.div`
/* background-color: red; */
display: flex; justify-content:center;
  img{
    border-radius: 100%;
  }
`;

function UserImgAtm(props: { width: number; height: number ; url?:string}) {
  return (
    <>
      <UserImgAtmStyle>
        <img  
          src={props.url ? props.url:"/assets/images/dummyUserImg.jpg"}
          alt="user dummy image"
          width={props.width}
          height={props.height}
        />
      </UserImgAtmStyle>
    </>
  );
}

export default UserImgAtm;
