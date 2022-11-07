import styled from "@emotion/styled";
import { url } from "inspector";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { color } from "../../styles/theme";

const MainRecUserCardStyle = styled.div<{ postImgUrl: string }>`
  position: relative;
  width: 150px;
  height: 216px;
  background-image: url(${(props) => props.postImgUrl});
  background-size: cover;
  background-color: black;
  background-repeat: no-repeat;
  background-position: center;

  border-radius: 9px;

  div {
    position: absolute;
    bottom: 8px;
    left: 8px;
  }
`;

const MainRecUserInfoStyle = styled.div`
  display: flex;
  background-color: #000000aa;
  border-radius: 9px;
  padding: 4px;
  max-width: 130px;

  img {
    border-radius: 100%;
  }
  p {
    color: white;
    margin: auto 0 auto 3px;
    font-size: 0.875rem;
  }
`;

function MainRecUserCardMol(props: {
  user: {
    cornId: string;
    cornImgUrl: string;
    postImgUrl: string;
    userNickName: string;
  };
}) {
  const { cornId, cornImgUrl, postImgUrl, userNickName } = props.user;
  const router = useRouter()
  console.log(postImgUrl);

  return (
    <>
      <MainRecUserCardStyle postImgUrl={postImgUrl} onClick={() => router.push(`/profile/${cornId}`)}>
        <MainRecUserInfoStyle>
          <Image  src={cornImgUrl} alt="유저 이미지" width={30} height={30} />
          <p>{userNickName}</p>
        </MainRecUserInfoStyle>
      </MainRecUserCardStyle>
    </>
  );
}

export default MainRecUserCardMol;
