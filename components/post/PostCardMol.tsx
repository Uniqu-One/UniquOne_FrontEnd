import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React from "react";
import { useRecoilValue } from "recoil";
import { UserInfoState } from "../../states/recoil/UserInfoState";
import ThreeDotMol from "../common/mol/ThreeDotMol";
import PostFollowMol from "./PostFollowMol";
import PostFuncBarMol from "./PostFuncBarMol";
import PostSliderMol from "./PostSliderMol";
import PostUserMol from "./PostUserMol";

const PostCarTmpStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px 21px 0px 18px;
  padding-top: 0px;
  .right {
    display: flex;
    > div {
      margin: auto 0;
      margin-left: 12px;
    }
  }
`;

export type PostDataType = {};

function PostCardMol(props: {
  postId: number | string;
  postDetailData?: any;
  postListData?: any;
}) {
  const { postId, postDetailData, postListData } = props;
  const router = useRouter();
  const userCornId = useRecoilValue(UserInfoState).cornId;

  if (postListData) {
    const {
      cornId,
      cornTitle,
      cornImgUrl,
      isCool,
      isFollow,
      postId,
      postImgUrlList,
      regDate,
      userId,
      postImgUrl,
      userNickName,
      uniStar,
      imgUrlList,
    } = postListData;

    console.log(postListData);

    return (
      <>
        <PostCarTmpStyle>
          <div onClick={() => router.push(`/profile/${cornId}`)}>
            <PostUserMol userName={userNickName} cornImg={cornImgUrl} />
          </div>
          <div className="right">
            {router.query.postId ? (
              <PostFollowMol
                postId={postId}
                isFollow={isFollow}
                cornId={cornId}
              />
            ) : (
              <></>
            )}

            <ThreeDotMol postId={postId} />
          </div>
        </PostCarTmpStyle>

        <PostSliderMol
          postId={postId}
          postImgUrlList={imgUrlList || postImgUrl}
        />

        {/* 하트랑 유니스타랑 댓글 */}
        <PostFuncBarMol postId={postId} isCool={isCool} uniStar={uniStar} />
      </>
    );
  }

  if (postDetailData) {
    const {
      imgUrlList,
      cornImgUrl,
      userNickName,
      isCool,
      uniStar,
      isFollow,
      cornId,
    } = postDetailData;

    return (
      <>
        <PostCarTmpStyle>
          <div onClick={() => router.push(`/profile/${cornId}`)}>
            <PostUserMol userName={userNickName} cornImg={cornImgUrl} />
          </div>
          <div className="right">
            {userCornId === cornId ? (
              <></>
            ) : (
              <PostFollowMol
                postId={postId}
                isFollow={isFollow}
                cornId={cornId}
              />
            )}

            <ThreeDotMol postId={postId} />
          </div>
        </PostCarTmpStyle>

        <PostSliderMol
          postId={postId}
          postImgUrlList={imgUrlList || imgUrlList}
        />

        {/* 하트랑 유니스타랑 댓글 받아와야함*/}
        <PostFuncBarMol postId={postId} isCool={isCool} uniStar={uniStar} />
      </>
    );
  }

  return <></>;
}

export default PostCardMol;
